// Branded emails. Table layout and inline styles so they render in Gmail, Outlook and Apple Mail.

import { site } from "./content";

const SITE_URL = "https://www.matepro.com.au";
const LIME = "#CBE733";
const BLACK = "#121212";
const CHARCOAL = "#222222";
const WHITE = "#FAFAFA";
const MUTED = "#B3B3B3";
const FONT = "Poppins, 'Helvetica Neue', Helvetica, Arial, sans-serif";

const escape = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

function layout(preheader: string, body: string) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="dark">
<meta name="supported-color-schemes" content="dark">
<title>MatePro</title>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800&display=swap" rel="stylesheet">
</head>
<body style="margin:0;padding:0;background:${BLACK}">
<div style="display:none;max-height:0;overflow:hidden;opacity:0">${escape(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${BLACK}" style="background:${BLACK}">
  <tr>
    <td align="center" style="padding:32px 16px">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px">
        <tr>
          <td style="padding:0 4px 28px">
            <a href="${SITE_URL}"><img src="${SITE_URL}/brand/matepro-email-logo.png" width="140" height="40" alt="MatePro" style="display:block;border:0"></a>
          </td>
        </tr>
        <tr>
          <td bgcolor="${CHARCOAL}" style="background:${CHARCOAL};border-radius:24px;padding:36px 32px">
            ${body}
          </td>
        </tr>
        <tr>
          <td style="padding:28px 4px 0;font:400 13px/1.6 ${FONT};color:#8A8A8A">
            MatePro &middot; The free truck map for Aussie drivers<br>
            <a href="mailto:${site.email}" style="color:#8A8A8A;text-decoration:none">${site.email}</a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

// Sent to someone who joins the app waitlist
export function waitlistEmail() {
  const subject = "You're on the MatePro app list";
  const html = layout(
    "We'll email you the day the app is out.",
    `
    <div style="width:48px;height:6px;background:${LIME};border-radius:3px;margin-bottom:24px"></div>
    <h1 style="margin:0;font:800 30px/1.15 ${FONT};color:${WHITE}">You're on the list.</h1>
    <p style="margin:16px 0 0;font:400 16px/1.6 ${FONT};color:${MUTED}">
      Thanks for signing up. We'll email you the day the MatePro app hits the App Store and Google Play.
      Low bridges, load limits and truck routes on one map, plus truck stops, diesel prices and pre-starts. Free for every driver.
    </p>
    `,
  );
  const text = [
    "You're on the list.",
    "",
    "Thanks for signing up. We'll email you the day the MatePro app hits the App Store and Google Play.",
  ].join("\n");
  return { subject, html, text };
}

// Sent to MatePro for every waitlist sign-up
export function teamWaitlistEmail(email: string) {
  return {
    subject: `App waitlist sign-up: ${email}`,
    html: layout(
      email,
      `
      <span style="display:inline-block;padding:6px 12px;background:${LIME};border-radius:999px;font:700 12px/1 ${FONT};color:${BLACK};letter-spacing:.04em;text-transform:uppercase">App waitlist</span>
      <h1 style="margin:18px 0 0;font:800 24px/1.2 ${FONT};color:${WHITE}">${escape(email)}</h1>
      <p style="margin:8px 0 0;font:500 15px/1.5 ${FONT};color:${MUTED}">Signed up for the app launch.</p>
      `,
    ),
    text: `App waitlist sign-up: ${email}`,
  };
}
