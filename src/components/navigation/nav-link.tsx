"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function NavLink(props: ComponentProps<typeof Link>) {
    const { className, href, ...restProps } = props;

    const pathname = usePathname();
    const isActive = pathname === href || pathname.startsWith(`${href}/`);

    return (
        <Link
            aria-current={isActive ? "page" : undefined}
            className={cn(
                "flex h-full items-center border-b-[3px] border-r border-primary px-8 hover:text-white",
                isActive
                    ? "border-b-orange text-white"
                    : "border-b-transparent",
                className,
            )}
            href={href}
            role="menuitem"
            {...restProps}
        />
    );
}
