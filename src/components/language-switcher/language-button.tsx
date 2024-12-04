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
                "h-full border-l border-primary px-3.5 hover:bg-dark-slate-blue",
                props.isActive ? "text-white" : "",
                props.className,
            )}
            onClick={() => setUserLocale(props.locale)}
            title={props.locale === "en" ? "English" : "Čeština"}
        >
            {props.locale === "en" ? "en" : "cz"}
        </button>
    );
}
