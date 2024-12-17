"use client";

import { usePathname } from "next/navigation";
import { ReactNode, RefObject } from "react";
import { useMenuForPath } from "@/hooks/use-menu-for-path";
import { Folder } from "../page-menu/folder";

interface Props {
    children?: ReactNode;
    ref: RefObject<HTMLElement | null>;
}

export function SidebarMobile(props: Props) {
    const pathname = usePathname();

    const menuConfig = useMenuForPath(pathname);

    return (
        <aside
            className="w-full space-y-1 md:hidden"
            id="sidebar-mobile"
            ref={props.ref}
        >
            {menuConfig.map((config) => (
                <details key={config.title}>
                    <summary className="bg-dark-slate-blue px-7 py-1 text-white">
                        {config.title}
                    </summary>
                    {config.menuItems ? (
                        <div className="space-y-2 px-7 py-4">
                            {config.foldres?.map((folder) => (
                                <Folder
                                    color={folder.color}
                                    folder={folder}
                                    key={folder.label}
                                    menuItems={config.menuItems ?? []}
                                />
                            ))}
                        </div>
                    ) : (
                        props.children
                    )}
                </details>
            ))}
        </aside>
    );
}
