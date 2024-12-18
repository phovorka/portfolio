"use client";

import { usePathname } from "next/navigation";
import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import { AdditionalContacts } from "@/components/additional-contacts/additional-contacts";
import { ContactDetails } from "@/components/contacts-details/contact-details";
import { SubHeader } from "@/components/header/subheader";
import { DesktopPageMenu } from "@/components/page-menu/page-menu";
import { ProjectsFilter } from "@/components/projects-filter/projects-filter";
import { SidebarDesktop } from "@/components/sidebar/sidebar";
import { SidebarMobile } from "@/components/sidebar/sidebar-mobile";
import { cn } from "@/lib/utils";

interface Props {
    children: ReactNode;
}

export default function AboutPageLayout(props: Props) {
    const pathname = usePathname();

    const isAboutPage = pathname.includes("/about");

    const isProjectsPage = pathname.includes("/projects");

    const isContactPage = pathname.includes("/contact");

    const sidebarMobileRef = useRef<HTMLElement>(null);

    const [sidebarMobileHeight, setSidebarMobileHeight] = useState(0);

    useEffect(() => {
        if (sidebarMobileRef.current) {
            setSidebarMobileHeight(
                document.getElementById("sidebar-mobile")?.offsetHeight ?? 0,
            );
        }
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
            <SidebarMobile ref={sidebarMobileRef}>
                {isProjectsPage && <ProjectsFilter />}
                {isContactPage && (
                    <>
                        <ContactDetails />
                        <AdditionalContacts />
                    </>
                )}
            </SidebarMobile>
            {isAboutPage && <SidebarDesktop />}
            <DesktopPageMenu showContacts={isAboutPage}>
                {isProjectsPage && <ProjectsFilter />}
                {isContactPage && (
                    <>
                        <ContactDetails />
                        <AdditionalContacts />
                    </>
                )}
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
