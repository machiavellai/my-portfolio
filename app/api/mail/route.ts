import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { createTransport } from "nodemailer";

interface MailData {
    Name: string;
    email: string;
    message: string;
}

export async function POST(req: NextRequest, res: NextResponse) {

    try {
        const data: MailData = await req.json();

        if (!data.Name || !data.email || !data.message) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }
        const transporter = createTransport({
            service: "gmail",
            auth: {
                user: "oghenevictor54p@gmail.com",
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const mailOptions = {
            from: data.email,
            to: "oghenevictor54p@gmail.com",
            replyTo: data.email,
            text: data.message,
            html: `
             <div style="font-family: Arial, sans-serif; color: #333;">
                <h1 style="color: #007BFF;">New message from ${data.email}</h1>
                  <h2 style="margin-bottom: 5px;">Name:</h2>
                <p style="margin-top: 0;">${data.Name}</p>    
                 <h2 style="margin-bottom: 5px;">Message:</h2>
                <p style="margin-top: 0;">${data.message}</p>
            </div>
            `,
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Email sent" }, { status: 200 });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        } else {
            return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
        }
    }
}

export const config = {
    runtime: 'edge',
};