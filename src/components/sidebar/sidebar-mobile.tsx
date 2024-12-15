"use client";

import { RefObject } from "react";
import { Folder } from "../page-menu/folder";
import { usePageMenu } from "../page-menu/hooks/use-page-menu";

interface Props {
    ref: RefObject<HTMLElement | null>;
}

export function SidebarMobile(props: Props) {
    const menuItems = usePageMenu();

    return (
        <aside className="w-full space-y-1 md:hidden" ref={props.ref}>
            {Object.values(menuItems).map((item) => (
                <details key={item.title}>
                    <summary className="bg-dark-slate-blue px-7 py-1 text-white">
                        {item.title}
                    </summary>
                    <div className="space-y-2 px-7 py-4">
                        {item.foldres?.map((folder) => (
                            <Folder
                                color={folder.color}
                                folder={folder}
                                key={folder.label}
                                menuItems={item.menuItems ?? []}
                            />
                        ))}
                    </div>
                </details>
            ))}
        </aside>
    );
}
