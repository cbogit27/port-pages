import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other email services as well
    auth: {
      user: process.env.EMAIL, // Your email address
      pass: process.env.PASSKEY, // Your email password or app-specific password
    },
  });

  // Set up email data
  const mailOptions = {
    from: email, // Sender's email
    to: process.env.EMAIL, // Receiver's email
    subject: `New message from ${name}`,
    text: message,
    html: `<p>${message}</p>`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error sending email:', error.message);
      return NextResponse.json({ success: false, error: error.message });
    } else {
      console.error('Unknown error:', error);
      return NextResponse.json({ success: false, error: 'An unknown error occurred' });
    }
  }
}
