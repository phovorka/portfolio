import { render } from "@react-email/components";
import nodemailer from "nodemailer";
import { ContactFormData } from "@/components/contact-form/contact-form";
import InquiryEmail from "../../emails/inquiry";
//new env 2
const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_SERVER_USERNAME,
        pass: process.env.SMTP_SERVER_PASSWORD,
    },
});

export async function sendEmail(formData: ContactFormData) {
    const emailHtml = await render(
        <InquiryEmail
            email={formData.email}
            message={formData.message}
            name={formData.name}
        />,
    );

    try {
        await transporter.verify();

        await transporter.sendMail({
            from: process.env.CONTACT_EMAIL, // must match verified sender
            replyTo: formData.email,        // user’s email
            subject: "Nová poptávka z webu",
            html: emailHtml,
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Email sending failed", error);
        throw new Error("Email sending failed");
    }
}
