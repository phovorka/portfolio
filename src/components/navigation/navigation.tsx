import { useTranslations } from "next-intl";
import { NavItem } from "./nav-item";
import { NavLink } from "./nav-link";

export function Navigation() {
    const t = useTranslations();

    return (
        <nav className="max-md:hidden">
            <ul className="flex h-full">
                <NavItem>
                    <NavLink href="/">{t("HomePage.navigation.home")}</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/about">
                        {t("HomePage.navigation.about")}
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/projects">
                        {t("HomePage.navigation.projects")}
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="border-r" href="/contact">
                        {t("HomePage.navigation.contact")}
                    </NavLink>
                </NavItem>
            </ul>
        </nav>
    );
}
