"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiCloseFill } from "@remixicon/react";
import { getBasePath } from "@/utils/get-base-path";
import { usePageMenu } from "../page-menu/hooks/use-page-menu";

export function Tab() {
    const pathname = usePathname();

    const menuItems = usePageMenu();
    const basePath = getBasePath(menuItems, pathname);
    const menu = basePath ? menuItems[basePath] : undefined;

    const label = menu?.sections?.map((section) =>
        section.items?.find((item) => item.href === pathname),
    );

    return (
        <div className="flex h-full w-fit items-center gap-12 border-r border-primary px-3">
            {label?.at(0)?.label}
            <Link
                className="hover:text-white"
                href={`/about/${pathname.includes("personal-info") ? "personal-info" : "professional-info"}`}
            >
                <RiCloseFill />
            </Link>
        </div>
    );
}
