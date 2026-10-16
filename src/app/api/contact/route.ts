import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, message: 'Missing required fields' },
                { status: 400 }
            );
        }

        const emailUser = process.env.EMAIL_USER?.trim();
        const emailPass = process.env.EMAIL_PASS?.replace(/[\s-]+/g, '').trim();

        if (!emailUser || !emailPass) {
            console.error('Email credentials missing: EMAIL_USER or EMAIL_PASS is not set in environment variables.');
            return NextResponse.json(
                {
                    success: false,
                    message: 'Server error: EMAIL_USER or EMAIL_PASS is missing in environment variables. If running on Vercel, please add them in Vercel Project Settings.',
                },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: emailUser,
                pass: emailPass,
            },
        });

        const mailOptions = {
            from: emailUser,
            to: emailUser, // Send to yourself
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { success: true, message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('Error sending email:', error);
        const isAuthError = error?.code === 'EAUTH' || error?.responseCode === 535 || error?.message?.includes('535');
        const errorMessage = isAuthError
            ? 'Gmail Authentication failed (Invalid Credentials). Please create a fresh 16-character App Password in your Google Account and update EMAIL_PASS.'
            : (error?.message || 'Failed to send email');

        return NextResponse.json(
            { success: false, message: errorMessage },
            { status: 500 }
        );
    }
}
