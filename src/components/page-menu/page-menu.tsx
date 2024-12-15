"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { RiMailFill, RiPhoneFill } from "@remixicon/react";
import { useTranslations } from "next-intl";
import { getBasePath } from "@/utils/get-base-path";
import { Folder } from "./folder";
import { usePageMenu } from "./hooks/use-page-menu";

interface Props {
    children?: ReactNode;
    showContacts?: boolean;
}

export function DesktopPageMenu(props: Props) {
    const t = useTranslations();

    const pathname = usePathname();

    const menuItems = usePageMenu();
    const basePath = getBasePath(menuItems, pathname);
    const menu = basePath ? menuItems[basePath] : undefined;

    return (
        <aside className="w-full shrink-0 border-r border-primary max-md:hidden">
            <details className="group" open>
                <summary className="h-10 cursor-pointer border-b border-primary px-3.5 leading-10 group-open:text-white">
                    {menu?.title}
                </summary>
                {menu?.menuItems ? (
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
                ) : (
                    props.children
                )}
            </details>
            {props.showContacts && (
                <details className="group" open>
                    <summary className="h-10 cursor-pointer border-b border-primary pl-3.5 leading-10 group-open:text-white">
                        {t("AboutPage.left-menu.personal-info.contacts")}
                    </summary>
                    <div className="flex flex-col gap-3.5 px-3.5 pt-[18px]">
                        <a
                            className="flex items-center gap-2 hover:text-white"
                            href="mailto:lukiss482@gmail.com"
                        >
                            <RiMailFill size={16} />
                            lukiss482@gmail.com
                        </a>
                        <a
                            className="flex items-center gap-2 hover:text-white"
                            href="tel:+420604305632"
                        >
                            <RiPhoneFill size={16} /> +420 604 305 632
                        </a>
                    </div>
                </details>
            )}
        </aside>
    );
}
