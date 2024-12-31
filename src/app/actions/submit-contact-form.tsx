"use server";

import { z } from "zod";
import { CONTACT_FORM_INITIAL_STATE } from "@/components/contact-form/constants";
import { ContactFormData } from "@/components/contact-form/contact-form";
import { isNil } from "@/utils/is-nil";
import { sendEmail } from "@/utils/send-email";

export type ContactFormState = {
    errors?: {
        [K in keyof ContactFormData]?: string[];
    };
    message: string;
    success: boolean;
};

export async function submitContactForm(
    prevState: ContactFormState | null,
    formData: ContactFormData | null,
): Promise<ContactFormState> {
    if (isNil(formData)) {
        return CONTACT_FORM_INITIAL_STATE;
    }

    try {
        await sendEmail(formData);

        return { success: true, message: "Email byl úspěšně odeslán" };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return {
                success: false,
                message: "Něco je špatně s vašimi údaji",
                errors: error.flatten().fieldErrors,
            };
        }

        return {
            success: false,
            message: `Něco se nepovedlo, zkuste to prosím znovu: ${error}`,
        };
    }
}
