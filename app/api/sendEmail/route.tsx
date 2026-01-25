
import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { render } from '@react-email/render';
import { Email } from '@/components/EmailTemplate';

export async function POST(request: NextRequest) {
    // Message content validation for spam
    function isSpam({ name, email, subject, message }: { name: string, email: string, subject: string, message: string }) {
        // Block if any field is too short or looks like random/gibberish
        const minLength = 8;
        const fields = [name, subject, message];
        if (fields.some(f => !f || f.length < minLength)) return true;

        // Block if message is all uppercase or all lowercase and short
        if ((message === message.toUpperCase() || message === message.toLowerCase()) && message.length < 20) return true;

        // Block if message or subject is a single word
        if (message.trim().split(/\s+/).length === 1) return true;
        if (subject.trim().split(/\s+/).length === 1) return true;

        // Block if name or subject looks like random letters (no vowels)
        const noVowels = /^[^aeiouAEIOU]+$/;
        if (noVowels.test(name) || noVowels.test(subject)) return true;

        // Block if email is gmail and name/subject/message are random
        if (email.endsWith('@gmail.com') && fields.every(f => /^[a-zA-Z]+$/.test(f) && f.length < 20)) return true;

        // Block if message contains suspicious repeated characters
        if (/([A-Za-z])\1{2,}/.test(message)) return true;

        // Block if message contains only letters and is short
        if (/^[A-Za-z]+$/.test(message) && message.length < 20) return true;

        return false;
    }

    const { email, name, phone, message, subject, recaptchaToken } = await request.json();

    if (isSpam({ name, email, subject, message })) {
        return NextResponse.json({ error: 'Message flagged as spam.' }, { status: 400 });
    }

    // Verify reCAPTCHA token
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!recaptchaToken || !secretKey) {
        return NextResponse.json({ error: 'Missing reCAPTCHA token or secret' }, { status: 400 });
    }
    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${secretKey}&response=${recaptchaToken}`
    });
    const verifyData = await verifyRes.json();
    if (!verifyData.success || verifyData.score < 0.5) {
        return NextResponse.json({ error: 'Failed reCAPTCHA verification' }, { status: 400 });
    }

    const emailHtml = await render(<Email email={email} name={name} phone={phone} message={message} subject={subject} />);

    const transport = nodemailer.createTransport({
        host: process.env.NEXT_PUBLIC_SMTP_HOST,
        port: parseInt(process.env.NEXT_PUBLIC_SMTP_PORT as string),
        secure: false,
        tls: {
            ciphers: "SSLv3",
            rejectUnauthorized: false,
        },
        auth: {
            user: process.env.NEXT_PUBLIC_SMTP_FROM,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    const mailOptions: Mail.Options = {
        from: `${process.env.NEXT_PUBLIC_URL} ricky@landino.dev`,
        to: process.env.NEXT_PUBLIC_TO_EMAIL,
        subject: `${process.env.NEXT_PUBLIC_BRAND} Website Contact`,
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