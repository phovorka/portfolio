import { useTranslations } from "next-intl";

interface NavLink {
    href: string;
    label: string;
    className?: string;
}

export function useMenuItems(): NavLink[] {
    const t = useTranslations();

    return [
        { href: "/", label: t("HomePage.navigation.home") },
        {
            href: "/about",
            label: t("HomePage.navigation.about"),
        },
        { href: "/projects", label: t("HomePage.navigation.projects") },
        { href: "/contact", label: t("HomePage.navigation.contact") },
    ];
}
