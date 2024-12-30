"use client";

import { useTranslations } from "next-intl";
import { SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { sendEmail } from "@/app/actions/send-email";
import { Form } from "../form/form";
import { TextInput } from "../form/text-input/text-input";
import { Button } from "../ui/button/button";
import { ContactFormCode } from "./contact-form-code";

const FORM_SCHEMA = z.object({
    email: z.string().min(1, "Email je povinný").email("Neplatný email"),
    message: z.string().min(1, "Zpráva je povinná"),
    name: z.string().min(1, "Jméno je povinné"),
});

export type ContactFormData = z.infer<typeof FORM_SCHEMA>;

export function ContactForm() {
    const t = useTranslations();

    const handleSubmitForm: SubmitHandler<ContactFormData> = async (data) =>
        await sendEmail(data);

    return (
        <Form
            className="grid max-h-[calc(100vh-var(--header-height)-var(--footer-height)-var(--sidebar-mobile-height)-56px-32px)] divide-primary overflow-y-auto md:max-h-[calc(100vh-var(--header-height)-var(--footer-height)-40px-128px)] xl:grid-cols-2 xl:divide-x"
            onSubmit={handleSubmitForm}
            options={{
                defaultValues: { email: "", message: "", name: "" },
            }}
            schema={FORM_SCHEMA}
        >
            {({ control, watch }) => (
                <>
                    <div className="mx-auto w-full space-y-6 px-4 pt-10 xl:w-2/3 xl:pt-14">
                        <TextInput
                            control={control}
                            isRequired
                            label={`${t("ContactPage.form.label.name")}:`}
                            name="name"
                        />
                        <TextInput
                            control={control}
                            isRequired
                            label={`${t("ContactPage.form.label.email")}:`}
                            name="email"
                        />
                        <TextInput
                            control={control}
                            isRequired
                            isTextArea
                            label={`${t("ContactPage.form.label.message")}:`}
                            name="message"
                        />
                        <Button type="submit">
                            {t("ContactPage.form.label.submit")}
                        </Button>
                    </div>
                    <ContactFormCode watch={watch} />
                </>
            )}
        </Form>
    );
}
