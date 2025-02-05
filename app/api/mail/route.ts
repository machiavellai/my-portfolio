import { NextApiRequest, NextApiResponse } from "next";
import { createTransport } from "nodemailer";

interface MailData {
    Name: string;
    email: string;
    message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const body = req.body as string;
        const data: MailData = JSON.parse(body);

        console.log(data);

        if (!data.Name || !data.email || !data.message) {
            res.status(400).json({ error: "All fields are required" });
            return;
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
        <h1>New message from ${data.email}</h1>
        <h2>Name:</h2>
        <h3>${data.Name}</h3>    
        <h2>Message:</h2>
        <h3>${data.message}</h3>
      `,
        };

        try {
            // Send email
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: "Email sent" });
        } catch (error) {
            //narrow down the type of error 
            // 
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: "An unexpected error occurred" });
            }
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}