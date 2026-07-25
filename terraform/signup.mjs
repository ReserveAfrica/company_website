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

export const handler = async (event) => {
  // Preflight
  if (event.requestContext?.http?.method === "OPTIONS") {
    return respond(204, {});
  }

  let email;
  try {
    const parsed = JSON.parse(event.body || "{}");
    email = (parsed.email || "").trim().toLowerCase();
  } catch {
    return respond(400, { message: "Invalid request body." });
  }

  if (!email || !EMAIL_RE.test(email)) {
    return respond(400, { message: "Please provide a valid email address." });
  }

  try {
    await sns.send(
      new PublishCommand({
        TopicArn: SNS_TOPIC_ARN,
        Subject: "New Reserve Africa signup",
        Message: `New signup: ${email}`,
      })
    );
  } catch (err) {
    console.error("SNS publish error:", err);
    return respond(500, { message: "Something went wrong. Please try again." });
  }

  return respond(200, { message: "You're on the list." });
};
