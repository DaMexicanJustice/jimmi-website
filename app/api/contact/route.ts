import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface AuthConfig {
  user: string;
  pass: string;
}

export async function POST(request: Request) {
  console.log("Postman is on the job");

  const authConfig: AuthConfig = {
    user: process.env.OUTLOOK_USER || 'your_outlook_email@example.com',
    pass: process.env.OUTLOOK_PASS || 'your_password',
  };

  try {
    const { name, email, phone, message } = await request.json();
    
    const transporter = nodemailer.createTransport({
      service: "outlook",
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false,
      auth: {
        user: authConfig.user,
        pass: authConfig.pass,
      },
    });

    const mailOptions = {
      from: "user",
      to: "the-email-you-want-to-receive-the-message",
      subject: "New message from your-website",
      text: `Navn: ${name}\nEmail: ${email}\Telefon: ${email}\Besked: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    return new NextResponse("Failed to send message.", { status: 500 })
  }
}