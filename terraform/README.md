# Reserve Africa — signup backend

A minimal AWS backend for the "notify me" form: API Gateway (HTTP API) → Lambda → SNS.
No database, no storage — every signup just triggers an email to you. If you
want a record of who signed up (not just a live notification), you'll need
somewhere to store it; ask and I can add that back in.

```
reserve-africa-signup/
├── src/
│   └── signup.mjs       # Lambda handler
└── terraform/
    ├── main.tf           # Lambda, IAM, HTTP API, SNS topic
    ├── variables.tf
    └── outputs.tf
```

## What gets created

- **Lambda function** (Node 20 on arm64) — validates the email, publishes to SNS
- **HTTP API** — public `POST /signup` endpoint, CORS locked to your site's origin
- **SNS topic + email subscription** — emails `notification_email` on every signup

## Prerequisites

- Terraform >= 1.5
- AWS credentials configured (`aws configure` or env vars)
- The `archive_file` data source (used to zip the Lambda code) comes from the
  `hashicorp/archive` provider — Terraform pulls it automatically on `init`.

## Deploy

```bash
cd reserve-africa-signup/terraform
terraform init
terraform apply \
  -var="allowed_origin=https://reserveafrica.com" \
  -var="notification_email=you@example.com"
```

Leave `allowed_origin` as `*` only while testing locally. Set it to your real
site's origin (no trailing slash) before going live — this is what CORS checks
against.

**One-time step:** right after `apply`, AWS sends `you@example.com` a
subscription confirmation email from SNS — click "Confirm subscription" in it,
or notifications won't be delivered. Add more recipients later with another
`aws_sns_topic_subscription` block in `main.tf` (each needs its own confirmation).

When it finishes:

```bash
terraform output signup_endpoint
```

That's your API URL.

## Wire up the frontend

In `coming-soon.html`, replace the fake `onsubmit` on the `<form>` with a real fetch call:

```html
<form id="signup-form">
  <input type="email" name="email" placeholder="you@example.com" required>
  <button type="submit">Notify me</button>
</form>

<script>
document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button');
  const email = form.querySelector('input[type=email]').value;

  btn.disabled = true;
  btn.textContent = 'Submitting…';

  try {
    const res = await fetch('https://YOUR_API_ID.execute-api.YOUR_REGION.amazonaws.com/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    if (!res.ok) throw new Error();
    btn.textContent = "Thanks!";
  } catch {
    btn.textContent = 'Something went wrong — try again';
    btn.disabled = false;
  }
});
</script>
```

Replace the fetch URL with the real `signup_endpoint` output.

## A note on duplicates

Since there's no storage layer, there's no dedupe check — if the same person
submits the form twice, you'll get two emails. Fine for a low-volume coming-soon
page; worth revisiting if that becomes annoying.

## Cost

At coming-soon-page volumes, this runs well within AWS's always-free tiers for
Lambda, API Gateway, and SNS (first 1,000 email notifications/month are free,
forever) — realistically $0/month.

## Teardown

```bash
cd terraform
terraform destroy
```
