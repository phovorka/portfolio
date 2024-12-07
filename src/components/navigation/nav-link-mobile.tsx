"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";
import clsx from "clsx";

export function NavLinkMobile(props: ComponentProps<typeof Link>) {
    const { className, href, ...restProps } = props;

    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            aria-current={isActive ? "page" : undefined}
            className={clsx(
                "flex h-[--header-height] items-center border-b border-primary px-[18px] hover:text-white",
                isActive && "text-white",
                className,
            )}
            href={href}
            {...restProps}
        />
    );
}
