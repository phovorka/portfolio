"use client";

import clsx from "clsx";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";

interface LanguageButtonProps {
    isActive: boolean;
    locale: Locale;
}

export function LanguageButton(props: LanguageButtonProps) {
    return (
        <button
            className={clsx(
                "border-primary h-full border-l px-3",
                props.isActive ? "text-white" : "",
            )}
            onClick={() => setUserLocale(props.locale)}
        >
            {props.locale === "en" ? "EN" : "CZ"}
        </button>
    );
}
