"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
    {
        path: "/about/personal-info",
        label: "Personal Info",
        icon: (
            <svg
                fill="currentColor"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M5 20H19V22H5V20ZM12 18C7.58172 18 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 14.4183 16.4183 18 12 18Z"></path>
            </svg>
        ),
    },
    {
        path: "/about/professional-info",
        label: "Professional Info",
        icon: (
            <svg
                fill="currentColor"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12 15V17H18V15H12ZM8.41421 12L5.58579 14.8284L7 16.2426L11.2426 12L7 7.75736L5.58579 9.17157L8.41421 12Z"></path>
            </svg>
        ),
    },
    {
        path: "/about/hobbies",
        label: "Hobbies",
        icon: (
            <svg
                fill="currentColor"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M17 4C20.3137 4 23 6.68629 23 10V14C23 17.3137 20.3137 20 17 20H7C3.68629 20 1 17.3137 1 14V10C1 6.68629 3.68629 4 7 4H17ZM10 9H8V11H6V13H7.999L8 15H10L9.999 13H12V11H10V9ZM18 13H16V15H18V13ZM16 9H14V11H16V9Z"></path>
            </svg>
        ),
    },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="h-full w-[68px] border-r border-primary pt-4">
            <nav className="h-full">
                <ul
                    className="flex h-full flex-col items-center gap-8"
                    role="menubar"
                >
                    {routes.map((route) => (
                        <li key={route.path} role="none">
                            <Link
                                className={
                                    pathname === route.path
                                        ? "opacity-100"
                                        : "opacity-40 hover:opacity-100"
                                }
                                href={route.path}
                                role="menuitem"
                                title={route.label}
                            >
                                {route.icon}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}
