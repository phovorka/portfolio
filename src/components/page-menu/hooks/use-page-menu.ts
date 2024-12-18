import { useTranslations } from "next-intl";

export type MenuItem = {
    folder?: string;
    href: string;
    label: string;
};

export type FolderType = {
    color: string;
    folder: string;
    label: string;
};

export type MenuConfig = {
    foldres?: FolderType[];
    menuItems?: MenuItem[];
    title: string;
};

export type MenuItems = {
    [key: string]: MenuConfig;
};

export function usePageMenu(): MenuItems {
    const t = useTranslations();

    return {
        "/about/personal-info": {
            foldres: [
                {
                    color: "#E99287",
                    folder: "bio",
                    label: t(
                        "AboutPage.left-menu.personal-info.folder.bio.title",
                    ),
                },
                {
                    color: "#4D5BCE",
                    folder: "education",
                    label: t(
                        "AboutPage.left-menu.personal-info.folder.education.title",
                    ),
                },
            ],
            menuItems: [
                {
                    folder: "bio",
                    href: "/about/personal-info/me",
                    label: t(
                        "AboutPage.left-menu.personal-info.folder.bio.files.me",
                    ),
                },
                {
                    folder: "education",
                    href: "/about/personal-info/high-school",
                    label: t(
                        "AboutPage.left-menu.personal-info.folder.education.files.high-school",
                    ),
                },
                {
                    folder: "education",
                    href: "/about/personal-info/university",
                    label: t(
                        "AboutPage.left-menu.personal-info.folder.education.files.university",
                    ),
                },
            ],
            title: t("AboutPage.left-menu.personal-info.title"),
        },
        "/about/professional-info": {
            menuItems: [
                {
                    label: "Experience",
                    href: "/about/professional-info/experience",
                },
                {
                    label: "Education",
                    href: "/about/professional-info/education",
                },
                { label: "Skills", href: "/about/professional-info/skills" },
            ],
            title: t("AboutPage.left-menu.professional-info.title"),
        },
        "/about/hobbies": {
            menuItems: [
                { label: "Sports", href: "/about/hobbies/sports" },
                { label: "Music", href: "/about/hobbies/music" },
                { label: "Travel", href: "/about/hobbies/travel" },
            ],
            title: t("AboutPage.left-menu.hobbies.title"),
        },
        "/projects": { title: t("ProjectsPage.left-menu.title") },
        "/contact": { title: t("ContactPage.left-menu.title") },
    };
}
