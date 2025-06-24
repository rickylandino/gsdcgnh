
import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { render } from '@react-email/render';
import { Email } from '@/components/EmailTemplate';

export async function POST(request: NextRequest) {
  const { email, name, phone, message, subject } = await request.json();

  const emailHtml = await render(<Email email={email} name={name} phone={phone} message={message} subject={subject} />);

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT as string),
    secure: false,
    tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
    },
    auth: {
      user: process.env.SMTP_FROM,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: `${process.env.URL} ricky@landino.dev`,
    to: process.env.TO_EMAIL,
    subject: `${process.env.BRAND} Website Contact`,
    html: emailHtml,
    replyTo: email
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}