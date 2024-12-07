"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "../language-switcher/language-switcher";
import { Navigation } from "../navigation/navigation";
import { NavigationMobileToggler } from "../navigation/navigation-mobile-toggler";

interface Props {
    locale: string;
}

export function Header(props: Props) {
    const t = useTranslations();

    const [isNavigationOpen, setIsNavigationOpen] = useState(false);

    return (
        <header className="flex h-[--header-height] border-b border-primary max-lg:px-[18px] lg:grid lg:grid-cols-[312px_1fr_auto]">
            <div className="flex items-center border-primary lg:border-r lg:px-[22px]">
                {t("HomePage.logo")}
            </div>
            <Navigation />
            <NavigationMobileToggler
                isNavigationOpen={isNavigationOpen}
                locale={props.locale}
                setIsNavigationOpen={setIsNavigationOpen}
            />
            <LanguageSwitcher className="max-lg:hidden" locale={props.locale} />
        </header>
    );
}
