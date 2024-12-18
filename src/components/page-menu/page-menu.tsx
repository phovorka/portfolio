"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { getBasePath } from "@/utils/get-base-path";
import { isNotNil } from "@/utils/is-not-nil";
import { ContactDetails } from "../contacts-details/contact-details";
import { Folder } from "./folder";
import { usePageMenu } from "./hooks/use-page-menu";

interface Props {
    children?: ReactNode;
    showContacts?: boolean;
}

export function DesktopPageMenu(props: Props) {
    const pathname = usePathname();

    const menuItems = usePageMenu();
    const basePath = getBasePath(menuItems, pathname);
    const menu = basePath ? menuItems[basePath] : undefined;

    return (
        <aside className="w-full shrink-0 border-r border-primary max-md:hidden">
            {isNotNil(menu?.menuItems) ? (
                <details className="group" open>
                    <summary className="h-10 cursor-pointer border-b border-primary px-3.5 leading-10 group-open:text-white">
                        {menu?.title}
                    </summary>
                    <div className="border-b border-primary px-3.5 pb-7 pt-[18px]">
                        <nav>
                            <ul className="space-y-2" role="menubar">
                                {menu?.foldres?.map((folder) => (
                                    <Folder
                                        color={folder.color}
                                        folder={folder}
                                        key={folder.folder}
                                        menuItems={menu.menuItems ?? []}
                                    />
                                ))}
                            </ul>
                        </nav>
                    </div>
                </details>
            ) : (
                props.children
            )}
            {props.showContacts && <ContactDetails />}
        </aside>
    );
}
