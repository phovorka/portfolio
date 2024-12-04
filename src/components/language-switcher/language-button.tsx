"use client";

import clsx from "clsx";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";

interface LanguageButtonProps {
    className?: string;
    isActive: boolean;
    locale: Locale;
}

export function LanguageButton(props: LanguageButtonProps) {
    return (
        <button
            className={clsx(
                "border-primary hover:bg-dark-slate-blue h-full border-l px-3.5",
                props.isActive ? "text-white" : "",
                props.className,
            )}
            onClick={() => setUserLocale(props.locale)}
            title={props.locale === "en" ? "English" : "Čeština"}
        >
            {props.locale === "en" ? "EN" : "CZ"}
        </button>
    );
}
