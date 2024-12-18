import { ContactForm } from "@/components/contact-form/contact-form";

export default function ContactPage() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleSubmitForm = async () => {};

    return (
        <>
            <div className="h-10 border-b border-primary max-md:hidden" />
            <ContactForm />
        </>
    );
}
