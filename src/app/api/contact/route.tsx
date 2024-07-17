import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

// Handles POST requests to /api/contact
export async function POST(request: NextRequest) {
  const username = process.env.GMAIL_USERNAME;
  const password = process.env.GMAIL_PASSWORD;
  const myEmail = process.env.PERSONAL_EMAIL;

  console.log("Dealing with request");

  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const telephone = formData.get("telephone");
    const template = formData.get("template");
    const backgroundColor = formData.get("backgroundColor");
    const stripeColor = formData.get("stripeColor");
    const quantity = formData.get("quantity");
    const fullLogo = formData.get("fullLogo");

    if (
      !name ||
      !email ||
      !telephone ||
      !template ||
      !backgroundColor ||
      !quantity
    ) {
      console.error("Missing form data");
      throw new Error("Missing form data");
    }

    console.log(
      `Form data - Name: ${name}, Email: ${email}, Telephone: ${telephone}, Template: ${template}, Background Color: ${backgroundColor}, Stripe Color: ${stripeColor}, Quantity: ${quantity}`
    );

    // create transporter object
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: username,
        pass: password,
      },
    });

    const attachments = [];
    if (fullLogo && typeof fullLogo === "string") {
      const matches = fullLogo.match(/^data:(.*);base64,(.*)$/);
      if (matches && matches.length === 3) {
        const contentType = matches[1];
        const base64Data = matches[2];
        attachments.push({
          filename: "logo.png",
          content: Buffer.from(base64Data, "base64"),
          contentType: contentType,
        });
      }
    }

    const mail = await transporter.sendMail({
      from: username,
      to: myEmail,
      replyTo: email,
      subject: `Website activity from ${email}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Telephone: ${telephone}</p>
        <p>Template: ${template}</p>
        <p>Background Color: ${backgroundColor}</p>
        <p>Stripe Color: ${stripeColor}</p>
        <p>Quantity: ${quantity}</p>
      `,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    console.log("Email sent successfully");

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error sending email:", errorMessage);
    return NextResponse.json(
      { message: "COULD NOT SEND MESSAGE", error: errorMessage },
      { status: 500 }
    );
  }
}
