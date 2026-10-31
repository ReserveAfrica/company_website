import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";

const sns = new SNSClient({});

const SNS_TOPIC_ARN = process.env.SNS_TOPIC_ARN;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "*";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const corsHeaders = {
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
  "Access-Control-Allow-Methods": "POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function respond(statusCode, body) {
  return {
    statusCode,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}

// Collapse whitespace/control characters and cap length, so free-text fields
// can't break the email layout.
function clean(value, max) {
  return String(value || "")
    .replace(/[\u0000-\u001f\u007f]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

export const handler = async (event) => {
  // Preflight
  if (event.requestContext?.http?.method === "OPTIONS") {
    return respond(204, {});
  }

  let parsed;
  try {
    parsed = JSON.parse(event.body || "{}");
  } catch {
    return respond(400, { message: "Invalid request body." });
  }

  const email = clean(parsed.email, 254).toLowerCase();
  if (!email || !EMAIL_RE.test(email)) {
    return respond(400, { message: "Please provide a valid email address." });
  }

  const isDemo = parsed.type === "demo";
  let subject;
  let message;

  if (isDemo) {
    const name = clean(parsed.name, 200);
    const product = clean(parsed.product, 50) || "Reserve Africa";
    if (!name) {
      return respond(400, { message: "Please provide your name." });
    }
    subject = `Demo request: ${product} - reserveafrica.com`;
    message = [
      "New demo request from reserveafrica.com",
      "",
      `Name:    ${name}`,
      `Email:   ${email}`,
      `Product: ${product}`,
    ].join("\n");
  } else {
    // Original "notify me" signup from the coming-soon page.
    subject = "I'm interested! - signup from reserveafrica.com";
    message = `New interested party: ${email}`;
  }

  try {
    await sns.send(
      new PublishCommand({ TopicArn: SNS_TOPIC_ARN, Subject: subject, Message: message })
    );
  } catch (err) {
    console.error("SNS publish error:", err);
    return respond(500, { message: "Something went wrong. Please try again." });
  }

  return respond(200, {
    message: isDemo ? "Thanks, we'll be in touch to set up your demo." : "You're on the list.",
  });
};
