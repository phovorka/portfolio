"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuItem = {
    label: string;
    href: string;
};

type MenuItems = {
    [key: string]: {
        menuItems: MenuItem[];
        title: string;
    };
};

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const menuItems: MenuItems = {
    "/about/personal-info": {
        menuItems: [
            { label: "Basic Info", href: "/about/personal-info/basic-info" },
            { label: "Contact", href: "/about/personal-info/contact" },
            { label: "Social Media", href: "/about/personal-info/social" },
        ],
        title: "personal-info",
    },
    "/about/professional-info": {
        menuItems: [
            {
                label: "Experience",
                href: "/about/professional-info/experience",
            },
            { label: "Education", href: "/about/professional-info/education" },
            { label: "Skills", href: "/about/professional-info/skills" },
        ],
        title: "professional-info",
    },
    "/about/hobbies": {
        menuItems: [
            { label: "Sports", href: "/about/hobbies/sports" },
            { label: "Music", href: "/about/hobbies/music" },
            { label: "Travel", href: "/about/hobbies/travel" },
        ],
        title: "hobbies",
    },
};

function getBasePath(pathname: string): string | undefined {
    return Object.keys(menuItems).find((key) => pathname.startsWith(key));
}

export function PageMenu() {
    const pathname = usePathname();
    const basePath = getBasePath(pathname);
    const menu = basePath ? menuItems[basePath] : undefined;

    return (
        <aside className="borderpr w-[244px] border-r border-primary">
            <details className="group" open>
                <summary className="h-10 cursor-pointer border-b border-primary pl-3.5 leading-10 group-open:text-white">
                    {menu?.title}
                </summary>
                <div className="border-b border-primary pb-7 pt-[18px]">
                    <nav>
                        <ul role="menubar">
                            {menu?.menuItems.map((menuItem) => (
                                <li key={menuItem.label}>
                                    <Link
                                        className={
                                            pathname.includes(menuItem.href)
                                                ? "text-white"
                                                : undefined
                                        }
                                        href={menuItem.href}
                                    >
                                        {menuItem.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </details>
            <details className="group" open>
                <summary className="h-10 cursor-pointer border-b border-primary pl-3.5 leading-10 group-open:text-white">
                    contacts
                </summary>
                <div className="flex flex-col gap-3.5 pt-[18px]">
                    <a href="mailto:lukiss482@gmail.com">lukiss482@gmail.com</a>
                    <a href="tel:+420604305632">+420 604 305 632</a>
                </div>
            </details>
        </aside>
    );
}
