"use client";

import { startTransition, useActionState } from "react";
import { useTranslations } from "next-intl";
import { SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { submitContactForm } from "@/app/actions/submit-contact-form";
import { Form } from "../form/form";
import { TextInput } from "../form/text-input/text-input";
import { Button } from "../ui/button/button";
import { CONTACT_FORM_INITIAL_STATE } from "./constants";
import { ContactFormCode } from "./contact-form-code";

export const CONTACT_FORM_SCHEMA = z.object({
    email: z.string().min(1, "Email je povinný").email("Neplatný email"),
    message: z.string().min(1, "Zpráva je povinná"),
    name: z.string().min(1, "Jméno je povinné"),
});

export type ContactFormData = z.infer<typeof CONTACT_FORM_SCHEMA>;

export function ContactForm() {
    const t = useTranslations();

    const [state, formAction, isPending] = useActionState(
        submitContactForm,
        CONTACT_FORM_INITIAL_STATE,
    );

    const handleSubmitForm: SubmitHandler<ContactFormData> = async (data) =>
        startTransition(() => formAction(data));

    return (
        <Form
            className="grid max-h-[calc(100dvh-var(--header-height)-var(--footer-height)-var(--sidebar-mobile-height)-56px-32px)] divide-primary overflow-y-auto md:max-h-[calc(100vh-var(--header-height)-var(--footer-height)-40px-128px)] xl:grid-cols-2 xl:divide-x"
            onSubmit={handleSubmitForm}
            options={{
                defaultValues: { email: "", message: "", name: "" },
            }}
            schema={CONTACT_FORM_SCHEMA}
        >
            {({ control, reset, watch }) => (
                <>
                    {state.success ? (
                        <div className="m-auto max-w-md text-center">
                            <p className="text-[26px] text-white">
                                {t("ContactPage.form.success.heading")}
                            </p>
                            <p className="mt-2.5">
                                {t("ContactPage.form.success.description")}
                            </p>
                            <Button
                                className="mt-8"
                                onPress={() => {
                                    reset();
                                    startTransition(() => formAction(null));
                                }}
                            >
                                {t("ContactPage.form.success.button")}
                            </Button>
                        </div>
                    ) : (
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
                                {isPending
                                    ? `${t("Common.sending")}...`
                                    : t("ContactPage.form.label.submit")}
                            </Button>
                        </div>
                    )}

                    <ContactFormCode watch={watch} />
                </>
            )}
        </Form>
    );
}
