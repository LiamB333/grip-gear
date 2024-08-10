import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request: NextRequest) {
  const { GMAIL_USERNAME, GMAIL_PASSWORD, PERSONAL_EMAIL } = process.env;

  try {
    const formData = await request.json(); // Using json instead of formData for this example
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      console.error("Missing form data");
      return new NextResponse(null, {
        status: 400,
        statusText: "Missing form data",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USERNAME,
        pass: GMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: GMAIL_USERNAME,
      to: PERSONAL_EMAIL,
      replyTo: email,
      subject: `Contact Form Submission from ${name}`,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });

    return new NextResponse(null, {
      status: 200,
      statusText: "Email sent successfully",
    });
  } catch (error) {
    console.error("Failed to send email:", error);
    return new NextResponse(null, {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
