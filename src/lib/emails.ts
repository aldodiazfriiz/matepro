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
            MatePro &middot; ${site.tagline}<br>
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

export type Interest = {
  name: string;
  phone: string;
  email: string;
  suburb: string;
  details: string;
};

// Sent to someone who registers interest in a franchise
export function franchiseEmail(f: Interest) {
  const first = f.name.split(/\s+/)[0];
  const subject = "Thanks for your interest in MatePro";
  const html = layout(
    `Thanks ${first}, we'll call you on ${f.phone} for a chat.`,
    `
    <div style="width:48px;height:6px;background:${LIME};border-radius:3px;margin-bottom:24px"></div>
    <h1 style="margin:0;font:800 30px/1.15 ${FONT};color:${WHITE}">Thanks, ${escape(first)}.<br>We've got your details.</h1>
    <p style="margin:16px 0 0;font:400 16px/1.6 ${FONT};color:${MUTED}">
      We'll give you a call on <strong style="color:${WHITE}">${escape(f.phone)}</strong> to talk about running a MatePro in ${escape(f.suburb)}.
      There's no cost and no commitment.
    </p>
    `,
  );
  const text = [
    `Thanks, ${first}. We've got your details.`,
    "",
    `We'll give you a call on ${f.phone} to talk about running a MatePro in ${f.suburb}. There's no cost and no commitment.`,
    "",
    `MatePro, ${site.tagline}`,
  ].join("\n");
  return { subject, html, text };
}

// Sent to MatePro for every franchise enquiry
export function teamFranchiseEmail(f: Interest) {
  const tel = `tel:${f.phone.replace(/[^\d+]/g, "")}`;
  return {
    subject: `Franchise enquiry: ${f.name}, ${f.suburb}`,
    html: layout(
      `${f.name}, ${f.suburb}, ${f.phone}`,
      `
      <span style="display:inline-block;padding:6px 12px;background:${LIME};border-radius:999px;font:700 12px/1 ${FONT};color:${BLACK};letter-spacing:.04em;text-transform:uppercase">Franchise enquiry</span>
      <h1 style="margin:18px 0 0;font:800 28px/1.15 ${FONT};color:${WHITE}">${escape(f.name)}</h1>
      <p style="margin:8px 0 24px;font:500 16px/1.5 ${FONT};color:${MUTED}">Interested in running MatePro in ${escape(f.suburb)}</p>
      ${button(tel, `Call ${escape(f.phone)}`)}
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:28px;border-top:1px solid #333333">
        ${rows([
          ["Phone", f.phone],
          ["Email", f.email],
          ["Area", f.suburb],
          ["About them", f.details || "-"],
        ])}
      </table>
      `,
    ),
    text: [
      "Franchise enquiry",
      "",
      `Name: ${f.name}`,
      `Phone: ${f.phone}`,
      `Email: ${f.email}`,
      `Area: ${f.suburb}`,
      `About them: ${f.details || "-"}`,
    ].join("\n"),
  };
}

// Sent to someone who asks to hear when the shop opens
export function shopEmail() {
  const subject = "You're on the MatePro shop list";
  const html = layout(
    "We'll email you the day the MatePro range goes on sale.",
    `
    <div style="width:48px;height:6px;background:${LIME};border-radius:3px;margin-bottom:24px"></div>
    <h1 style="margin:0;font:800 30px/1.15 ${FONT};color:${WHITE}">You're on the list.</h1>
    <p style="margin:16px 0 0;font:400 16px/1.6 ${FONT};color:${MUTED}">
      Thanks for signing up. We'll email you the day the MatePro range of wash products and accessories goes on sale.
    </p>
    `,
  );
  const text = [
    "You're on the list.",
    "",
    "Thanks for signing up. We'll email you the day the MatePro range of wash products and accessories goes on sale.",
  ].join("\n");
  return { subject, html, text };
}

// Sent to MatePro for every shop sign-up
export function teamShopEmail(email: string) {
  return {
    subject: `Shop sign-up: ${email}`,
    html: layout(
      email,
      `
      <span style="display:inline-block;padding:6px 12px;background:${LIME};border-radius:999px;font:700 12px/1 ${FONT};color:${BLACK};letter-spacing:.04em;text-transform:uppercase">Shop list</span>
      <h1 style="margin:18px 0 0;font:800 24px/1.2 ${FONT};color:${WHITE}">${escape(email)}</h1>
      <p style="margin:8px 0 0;font:500 15px/1.5 ${FONT};color:${MUTED}">Wants to hear when the MatePro range is on sale.</p>
      `,
    ),
    text: `Shop sign-up: ${email}`,
  };
}

// Sent to someone who joins the course list
export function courseEmail() {
  const subject = "You're on the MatePro course list";
  const html = layout(
    "We'll email you the day the MatePro detailing course is out.",
    `
    <div style="width:48px;height:6px;background:${LIME};border-radius:3px;margin-bottom:24px"></div>
    <h1 style="margin:0;font:800 30px/1.15 ${FONT};color:${WHITE}">You're on the list.</h1>
    <p style="margin:16px 0 0;font:400 16px/1.6 ${FONT};color:${MUTED}">
      Thanks for signing up. We'll email you the link the day the MatePro mobile car detailing course is out.
    </p>
    `,
  );
  const text = [
    "You're on the list.",
    "",
    "Thanks for signing up. We'll email you the link the day the MatePro mobile car detailing course is out.",
  ].join("\n");
  return { subject, html, text };
}

// Sent to MatePro for every course sign-up
export function teamCourseEmail(email: string) {
  return {
    subject: `Course sign-up: ${email}`,
    html: layout(
      email,
      `
      <span style="display:inline-block;padding:6px 12px;background:${LIME};border-radius:999px;font:700 12px/1 ${FONT};color:${BLACK};letter-spacing:.04em;text-transform:uppercase">Course list</span>
      <h1 style="margin:18px 0 0;font:800 24px/1.2 ${FONT};color:${WHITE}">${escape(email)}</h1>
      <p style="margin:8px 0 0;font:500 15px/1.5 ${FONT};color:${MUTED}">Wants to hear when the detailing course is out.</p>
      `,
    ),
    text: `Course sign-up: ${email}`,
  };
}

// Sent to someone who asks to hear when the car wash site opens
export function carWashEmail() {
  const subject = "You're on the MatePro Car Wash list";
  const html = layout(
    "We'll email you when the MatePro Car Wash opens.",
    `
    <div style="width:48px;height:6px;background:${LIME};border-radius:3px;margin-bottom:24px"></div>
    <h1 style="margin:0;font:800 30px/1.15 ${FONT};color:${WHITE}">You're on the list.</h1>
    <p style="margin:16px 0 0;font:400 16px/1.6 ${FONT};color:${MUTED}">
      Thanks for signing up. We'll email you when the MatePro Car Wash opens, with the address and opening day.
    </p>
    `,
  );
  const text = [
    "You're on the list.",
    "",
    "Thanks for signing up. We'll email you when the MatePro Car Wash opens, with the address and opening day.",
  ].join("\n");
  return { subject, html, text };
}

// Sent to MatePro for every car wash sign-up
export function teamCarWashEmail(email: string) {
  return {
    subject: `Car wash sign-up: ${email}`,
    html: layout(
      email,
      `
      <span style="display:inline-block;padding:6px 12px;background:${LIME};border-radius:999px;font:700 12px/1 ${FONT};color:${BLACK};letter-spacing:.04em;text-transform:uppercase">Car wash list</span>
      <h1 style="margin:18px 0 0;font:800 24px/1.2 ${FONT};color:${WHITE}">${escape(email)}</h1>
      <p style="margin:8px 0 0;font:500 15px/1.5 ${FONT};color:${MUTED}">Wants to hear when the car wash opens.</p>
      `,
    ),
    text: `Car wash sign-up: ${email}`,
  };
}

// Sent to someone who asks to hear when the app launches
export function appEmail() {
  const subject = "You're on the MatePro app list";
  const html = layout(
    "We'll send you the link the day the MatePro app is out.",
    `
    <div style="width:48px;height:6px;background:${LIME};border-radius:3px;margin-bottom:24px"></div>
    <h1 style="margin:0;font:800 30px/1.15 ${FONT};color:${WHITE}">You're on the list.</h1>
    <p style="margin:16px 0 0;font:400 16px/1.6 ${FONT};color:${MUTED}">
      Thanks for signing up. We'll send you the download link the day the MatePro app hits the App Store and Google Play.
    </p>
    `,
  );
  const text = [
    "You're on the list.",
    "",
    "Thanks for signing up. We'll send you the download link the day the MatePro app hits the App Store and Google Play.",
  ].join("\n");
  return { subject, html, text };
}

// Sent to MatePro for every app sign-up
export function teamAppEmail(email: string) {
  return {
    subject: `App sign-up: ${email}`,
    html: layout(
      email,
      `
      <span style="display:inline-block;padding:6px 12px;background:${LIME};border-radius:999px;font:700 12px/1 ${FONT};color:${BLACK};letter-spacing:.04em;text-transform:uppercase">App list</span>
      <h1 style="margin:18px 0 0;font:800 24px/1.2 ${FONT};color:${WHITE}">${escape(email)}</h1>
      <p style="margin:8px 0 0;font:500 15px/1.5 ${FONT};color:${MUTED}">Wants the app when it launches.</p>
      `,
    ),
    text: `App sign-up: ${email}`,
  };
}
