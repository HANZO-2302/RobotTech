import nodemailer from "nodemailer";
import { defineEventHandler, readBody, createError } from "h3";

// ── Яндекс SMTP ──────────────────────────────────────────────
// .env:
//   YANDEX_USER=you@yandex.ru
//   YANDEX_PASS=app-password
//   MAIL_TO=recipient@example.com
const transporter = nodemailer.createTransport({
  host: "smtp.yandex.ru",
  port: 465,
  secure: true,
  auth: {
    user: process.env.YANDEX_USER,
    pass: process.env.YANDEX_PASS,
  },
});

type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export default defineEventHandler(async (event) => {
  const { name, phone, email, message } = await readBody<ContactPayload>(event);

  if (!name || !phone || !email || !message) {
    throw createError({ statusCode: 400, statusMessage: "Please fill in all fields" });
  }

  try {
    await transporter.sendMail({
      from: `"Form on website" <${process.env.YANDEX_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `New request from ${name}`,
      text: [
        `Name:     ${name}`,
        `Phone: ${phone}`,
        `Email:   ${email}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
      html: `
        <h2 style="color:#2f5d3a">New request from website</h2>
        <table cellpadding="6" style="font-family:sans-serif;font-size:14px">
          <tr><td><b>Name</b></td><td>${name}</td></tr>
          <tr><td><b>Phone</b></td><td>${phone}</td></tr>
          <tr><td><b>Email</b></td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td><b>Message</b></td><td style="white-space:pre-wrap">${message}</td></tr>
        </table>
      `,
    });

    return { success: true };
  } catch (err) {
    console.error("[contact] mail error:", err);
    throw createError({
      statusCode: 500,
      statusMessage: "Server error. If you are using a VPN, try disconnecting and retrying.",
    });
  }
});