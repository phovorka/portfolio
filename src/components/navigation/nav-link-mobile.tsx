"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function NavLinkMobile(props: ComponentProps<typeof Link>) {
    const { className, href, ...restProps } = props;

    const pathname = usePathname();
    const isActive = pathname === href || pathname.startsWith(`${href}/`);

    return (
        <Link
            aria-current={isActive ? "page" : undefined}
            className={cn(
                "flex h-[--header-height] items-center border-b border-primary px-[18px] hover:text-white",
                isActive && "text-white",
                className,
            )}
            href={href}
            role="menuitem"
            {...restProps}
        />
    );
}
