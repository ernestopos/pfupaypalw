# PFU PayPal Webhook on Cloudflare Pages

This project uses Cloudflare Pages Functions to expose a REST API endpoint for receiving PayPal donation webhooks.

### Endpoint
`POST /api/paypal/webhook`

### How it works
- Receives PayPal webhook JSON.
- Validates and logs the payload.
- Returns a success message.

### Deploy
Push to GitHub → connected to Cloudflare Pages → automatic deployment.