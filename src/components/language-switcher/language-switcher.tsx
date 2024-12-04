import { getUserLocale } from "@/services/locale";
import { LanguageButton } from "./language-button";

export async function LanguageSwitcher() {
    const locale = await getUserLocale();

    return (
        <div>
            <LanguageButton isActive={locale === "en"} locale="en" />
            <LanguageButton isActive={locale === "cs"} locale="cs" />
        </div>
    );
}
