"use client";

import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import { SubHeader } from "@/components/header/subheader";
import { DesktopPageMenu } from "@/components/page-menu/page-menu";
import { SidebarDesktop } from "@/components/sidebar/sidebar";
import { SidebarMobile } from "@/components/sidebar/sidebar-mobile";

interface Props {
    children: ReactNode;
}

export default function AboutPageLayout(props: Props) {
    const sidebarMobileRef = useRef<HTMLElement>(null);

    const [sidebarMobileHeight, setSidebarMobileHeight] = useState(0);

    useEffect(() => {
        if (sidebarMobileRef.current) {
            setSidebarMobileHeight(sidebarMobileRef.current?.offsetHeight);
        }
    }, []);

    return (
        <div className="grow md:grid md:grid-cols-[68px_244px_auto]">
            {/* <div className="flex grow max-md:max-h-[calc(100%-var(--header-height)-var(--footer-height))] max-md:flex-col"> */}
            <SubHeader />
            <SidebarMobile ref={sidebarMobileRef} />
            <SidebarDesktop />
            <DesktopPageMenu />
            <div
                className="grow md:grid md:grid-rows-[40px_auto]"
                //className="grow overflow-y-auto overflow-x-hidden max-md:max-h-[calc(100%-var(--sidebar-mobile-height)-56px)]"
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
