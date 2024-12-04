import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "../language-switcher/language-switcher";
import { Navigation } from "../navigation/navigation";
import { NavigationMobileToggler } from "../navigation/navigation-mobile-toggler";

export function Header() {
    const t = useTranslations();

    return (
        <header className="border-primary flex h-[--header-height] border-b max-md:items-center max-md:justify-between max-md:px-[18px] md:grid md:grid-cols-[312px_1fr_auto]">
            <div className="flex items-center md:px-[22px]">
                {t("HomePage.logo")}
            </div>
            <Navigation />
            <NavigationMobileToggler />
            <LanguageSwitcher />
        </header>
    );
}
