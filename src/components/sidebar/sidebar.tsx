"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "./constants";

export function SidebarDesktop() {
    const pathname = usePathname();

    const isAboutPage = pathname.includes("/about");

    if (!isAboutPage) {
        return null;
    }

    return (
        <aside className="h-full w-[68px] shrink-0 border-r border-primary pt-4 max-md:hidden">
            <nav className="h-full">
                <ul
                    className="flex h-full flex-col items-center gap-8"
                    role="menubar"
                >
                    {routes.map((route) => (
                        <li key={route.path} role="none">
                            <Link
                                className={
                                    pathname === route.path ||
                                    pathname.startsWith(route.path)
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
