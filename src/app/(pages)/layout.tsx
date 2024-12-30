"use client";

import { usePathname } from "next/navigation";
import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import { SubHeader } from "@/components/header/subheader";
import { DesktopPageMenu } from "@/components/page-menu/page-menu";
import { SidebarDesktop } from "@/components/sidebar/sidebar";
import { SidebarMobile } from "@/components/sidebar/sidebar-mobile";
import { cn } from "@/lib/utils";

interface Props {
    children: ReactNode;
}

export default function AboutPageLayout(props: Props) {
    const pathname = usePathname();

    const isAboutPage = pathname.includes("/about");

    const sidebarMobileRef = useRef<HTMLDivElement>(null);

    const [sidebarMobileHeight, setSidebarMobileHeight] = useState(0);

    useEffect(() => {
        if (!sidebarMobileRef.current) {
            return;
        }

        const resizeObserver = new ResizeObserver(() => {
            if (sidebarMobileRef.current) {
                setSidebarMobileHeight(sidebarMobileRef.current.offsetHeight);
            }
        });
        resizeObserver.observe(sidebarMobileRef.current);
        return () => resizeObserver.disconnect();
    }, []);

    return (
        <div
            className={cn(
                "grow md:grid",
                isAboutPage
                    ? "md:grid-cols-[68px_244px_auto]"
                    : "md:grid-cols-[312px_auto]",
            )}
        >
            <SubHeader />
            <SidebarMobile ref={sidebarMobileRef} />
            <SidebarDesktop />
            <DesktopPageMenu />
            <div
                className="grow md:grid md:grid-rows-[40px_auto]"
                style={
                    {
                        "--sidebar-mobile-height": `${sidebarMobileHeight}px`,
                    } as CSSProperties
                }
            >
                {props.children}
            </div>
        </div>
    );
}
