"use client";

import { usePathname } from "next/navigation";
import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { SubHeader } from "@/components/header/subheader";
import { DesktopPageMenu } from "@/components/page-menu/page-menu";
import { ProjectsFilter } from "@/components/projects-filter/projects-filter";
import { SidebarDesktop } from "@/components/sidebar/sidebar";
import { SidebarMobile } from "@/components/sidebar/sidebar-mobile";

interface Props {
    children: ReactNode;
}

export default function AboutPageLayout(props: Props) {
    const pathname = usePathname();

    const isAboutPage = pathname.includes("/about");

    const isProjectsPage = pathname.includes("/projects");

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    const isContactPage = pathname.includes("/contact");

    const sidebarMobileRef = useRef<HTMLElement>(null);

    const [sidebarMobileHeight, setSidebarMobileHeight] = useState(0);

    useEffect(() => {
        if (sidebarMobileRef.current) {
            setSidebarMobileHeight(sidebarMobileRef.current?.offsetHeight);
        }
    }, []);

    return (
        <div
            className={clsx(
                "grow md:grid",
                isAboutPage
                    ? "md:grid-cols-[68px_244px_auto]"
                    : "md:grid-cols-[312px_auto]",
            )}
        >
            <SubHeader />
            <SidebarMobile ref={sidebarMobileRef} />
            {isAboutPage && <SidebarDesktop />}
            <DesktopPageMenu showContacts={isAboutPage}>
                {isProjectsPage && <ProjectsFilter />}
            </DesktopPageMenu>
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
