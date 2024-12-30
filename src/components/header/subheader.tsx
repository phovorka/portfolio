"use client";

import { usePathname } from "next/navigation";
import { useMenuItems } from "./hooks/use-menu-items";

export function SubHeader() {
    const pathname = usePathname();

    const menuItems = useMenuItems();

    const menu = menuItems.find(
        (item) =>
            pathname === item.href || pathname.startsWith(`${item.href}/`),
    );

    return (
        <div className="flex h-14 w-full shrink-0 items-center px-7 text-sm text-white md:hidden">
            {menu?.label}
        </div>
    );
}
