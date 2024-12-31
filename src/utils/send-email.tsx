import { render } from "@react-email/components";
import nodemailer from "nodemailer";
import { ContactFormData } from "@/components/contact-form/contact-form";
import InquiryEmail from "../../emails/inquiry";

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
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
            from: formData.email,
            to: process.env.CONTACT_EMAIL,
            subject: "Nová poptávka z webu",
            html: emailHtml,
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Something Went Wrong", error);
        throw new Error("Email sending failed");
    }
}
