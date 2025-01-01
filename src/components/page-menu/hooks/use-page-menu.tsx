import { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { AdditionalContacts } from "@/components/additional-contacts/additional-contacts";
import { Contacts } from "@/components/contacts-details/contacts";
import { ProjectsFilter } from "@/components/projects-filter/projects-filter";

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

export type SectionType = {
    Component?: ReactNode;
    items?: MenuItem[];
    label: string;
};

export type MenuConfig = {
    foldres?: FolderType[];
    menuItems?: MenuItem[];
    sections?: SectionType[];
    title: string;
};

export type MenuItems = {
    [key: string]: MenuConfig;
};

export function usePageMenu(): MenuItems {
    const t = useTranslations();

    return {
        "/about/personal-info": {
            sections: [
                {
                    items: [
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
                    label: t("AboutPage.left-menu.personal-info.title"),
                },
            ],
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
            title: t("AboutPage.left-menu.personal-info.title"),
        },
        "/about/professional-info": {
            sections: [
                {
                    items: [
                        {
                            folder: "work",
                            href: "/about/professional-info/cesys",
                            label: "cesys",
                        },
                        {
                            folder: "work",
                            href: "/about/professional-info/make",
                            label: "make/integromat",
                        },
                        {
                            folder: "work",
                            href: "/about/professional-info/uxf",
                            label: "uxf",
                        },
                    ],
                    label: t("AboutPage.left-menu.professional-info.title"),
                },
            ],
            foldres: [
                {
                    color: "#E99287",
                    folder: "work",
                    label: t(
                        "AboutPage.left-menu.professional-info.folder.work.title",
                    ),
                },
            ],
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
            sections: [
                { label: t("AboutPage.left-menu.hobbies.title") },
                {
                    Component: <Contacts />,
                    label: t("ContactPage.left-menu.title"),
                },
            ],
            menuItems: [
                { label: "Sports", href: "/about/hobbies/sports" },
                { label: "Music", href: "/about/hobbies/music" },
                { label: "Travel", href: "/about/hobbies/travel" },
            ],
            title: t("AboutPage.left-menu.hobbies.title"),
        },
        "/projects": {
            sections: [
                {
                    Component: <ProjectsFilter />,
                    label: t("ProjectsPage.left-menu.title"),
                },
            ],
            title: t("ProjectsPage.left-menu.title"),
        },
        "/contact": {
            sections: [
                {
                    Component: <Contacts />,
                    label: t("ContactPage.left-menu.title"),
                },
                {
                    Component: <AdditionalContacts />,
                    label: t("ContactPage.left-menu.additional-contacts.title"),
                },
            ],
            title: t("ContactPage.left-menu.title"),
        },
    };
}
