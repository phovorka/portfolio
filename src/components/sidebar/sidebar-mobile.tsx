"use client";

import { usePathname } from "next/navigation";
import { Fragment, ReactNode, RefObject } from "react";
import { useMenuForPath } from "@/hooks/use-menu-for-path";
import { Folder } from "../page-menu/folder";

interface Props {
    children?: ReactNode;
    ref: RefObject<HTMLDivElement | null>;
}

export function SidebarMobile(props: Props) {
    const pathname = usePathname();

    const menuConfig = useMenuForPath(pathname);

    return (
        <div
            className="w-full space-y-1 md:hidden"
            id="sidebar-mobile"
            ref={props.ref}
        >
            {menuConfig.map((config) => (
                <Fragment key={config.title}>
                    {config.sections?.map((section) => (
                        <details key={section.label}>
                            <summary className="bg-dark-slate-blue px-7 py-1 text-white">
                                {section.label}
                            </summary>
                            {section.items && (
                                <div className="my-4 space-y-2">
                                    {config.foldres?.map((folder) => (
                                        <Folder
                                            folder={folder}
                                            key={folder.folder}
                                            menuItems={section.items ?? []}
                                        />
                                    ))}
                                </div>
                            )}
                            {section.Component}
                        </details>
                    ))}
                </Fragment>
            ))}
        </div>
    );
}
