// Branded quote emails. Table layout and inline styles so they render in Gmail, Outlook and Apple Mail.

import { site } from "./content";

export type Quote = {
  name: string;
  phone: string;
  email: string;
  suburb: string;
  service: string;
  details: string;
};

const SITE_URL = "https://www.matepro.com.au";
const LIME = "#CBE733";
const BLACK = "#121212";
const CHARCOAL = "#222222";
const WHITE = "#FAFAFA";
const MUTED = "#B3B3B3";
const FONT = "Poppins, 'Helvetica Neue', Helvetica, Arial, sans-serif";

const escape = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

function rows(items: [string, string][]) {
  return items
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:12px 0;border-bottom:1px solid #333333;font:500 13px/1.4 ${FONT};color:${MUTED};width:110px;vertical-align:top">${label}</td>
        <td style="padding:12px 0;border-bottom:1px solid #333333;font:500 15px/1.5 ${FONT};color:${WHITE};white-space:pre-wrap">${escape(value)}</td>
      </tr>`,
    )
    .join("");
}

function button(href: string, label: string) {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td bgcolor="${LIME}" style="border-radius:999px">
          <a href="${href}" style="display:inline-block;padding:16px 28px;font:700 16px/1 ${FONT};color:${BLACK};text-decoration:none;border-radius:999px">${label}</a>
        </td>
      </tr>
    </table>`;
}

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
            MatePro &middot; Mobile truck wash, ${site.area}<br>
            <a href="${site.phoneHref}" style="color:#8A8A8A;text-decoration:none">${site.phone}</a> &middot;
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

// Sent to the customer straight after they ask for a quote
export function customerEmail(q: Quote) {
  const first = q.name.split(/\s+/)[0];
  const subject = "We've got your quote request";
  const html = layout(
    `Thanks ${first}, we'll call you on ${q.phone} soon.`,
    `
    <div style="width:48px;height:6px;background:${LIME};border-radius:3px;margin-bottom:24px"></div>
    <h1 style="margin:0;font:800 30px/1.15 ${FONT};color:${WHITE}">Thanks, ${escape(first)}.<br>We've got your request.</h1>
    <p style="margin:16px 0 0;font:400 16px/1.6 ${FONT};color:${MUTED}">
      We'll give you a call on <strong style="color:${WHITE}">${escape(q.phone)}</strong> soon, usually within the hour,
      to sort out a night that suits and a fixed price.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:28px;border-top:1px solid #333333">
      ${rows([
        ["Truck", q.service || "Truck wash"],
        ["Depot", q.suburb],
        ...(q.details ? ([["Details", q.details]] as [string, string][]) : []),
      ])}
    </table>
    <p style="margin:28px 0 20px;font:400 15px/1.6 ${FONT};color:${MUTED}">Need us sooner? Give us a ring.</p>
    ${button(site.phoneHref, `Call ${site.phone}`)}
    `,
  );
  const text = [
    `Thanks, ${first}. We've got your request.`,
    "",
    `We'll give you a call on ${q.phone} soon, usually within the hour, to sort out a night that suits and a fixed price.`,
    "",
    `Truck: ${q.service || "Truck wash"}`,
    `Depot: ${q.suburb}`,
    ...(q.details ? [`Details: ${q.details}`] : []),
    "",
    `Need us sooner? Call ${site.phone}.`,
    "",
    `MatePro, mobile truck wash, ${site.area}`,
  ].join("\n");
  return { subject, html, text };
}

// Sent to MatePro for every new request
export function teamEmail(q: Quote) {
  const tel = `tel:${q.phone.replace(/[^\d+]/g, "")}`;
  const subject = `New quote: ${q.service || "Truck wash"}, ${q.suburb}`;
  const html = layout(
    `${q.name}, ${q.suburb}, ${q.phone}`,
    `
    <span style="display:inline-block;padding:6px 12px;background:${LIME};border-radius:999px;font:700 12px/1 ${FONT};color:${BLACK};letter-spacing:.04em;text-transform:uppercase">New quote request</span>
    <h1 style="margin:18px 0 0;font:800 28px/1.15 ${FONT};color:${WHITE}">${escape(q.name)}</h1>
    <p style="margin:8px 0 24px;font:500 16px/1.5 ${FONT};color:${MUTED}">${escape(q.service || "Truck wash")} in ${escape(q.suburb)}</p>
    ${button(tel, `Call ${escape(q.phone)}`)}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:28px;border-top:1px solid #333333">
      ${rows([
        ["Phone", q.phone],
        ["Email", q.email || "-"],
        ["Depot", q.suburb],
        ["Truck", q.service || "-"],
        ["Details", q.details || "-"],
      ])}
    </table>
    ${
      q.email
        ? `<p style="margin:20px 0 0;font:400 14px/1.6 ${FONT};color:${MUTED}">Hit reply to email ${escape(q.name.split(/\s+/)[0])} directly.</p>`
        : ""
    }
    `,
  );
  const text = [
    "New quote request",
    "",
    `Name: ${q.name}`,
    `Phone: ${q.phone}`,
    `Email: ${q.email || "-"}`,
    `Depot: ${q.suburb}`,
    `Truck: ${q.service || "-"}`,
    `Details: ${q.details || "-"}`,
  ].join("\n");
  return { subject, html, text };
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
      Truck stops, diesel prices, pre-starts and expenses in one place, free for every driver.
    </p>
    <p style="margin:28px 0 20px;font:400 15px/1.6 ${FONT};color:${MUTED}">Need a truck washed in the meantime?</p>
    ${button(SITE_URL, "Book a MatePro wash")}
    `,
  );
  const text = [
    "You're on the list.",
    "",
    "Thanks for signing up. We'll email you the day the MatePro app hits the App Store and Google Play.",
    "",
    `Need a truck washed in the meantime? ${SITE_URL}`,
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
