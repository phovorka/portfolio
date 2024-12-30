"use client";

import { usePathname } from "next/navigation";
import { getBasePath } from "@/utils/get-base-path";
import { Folder } from "./folder";
import { usePageMenu } from "./hooks/use-page-menu";

export function DesktopPageMenu() {
    const pathname = usePathname();

    const menuItems = usePageMenu();
    const basePath = getBasePath(menuItems, pathname);
    const menu = basePath ? menuItems[basePath] : undefined;

    return (
        <aside className="w-full shrink-0 border-r border-primary max-md:hidden">
            {menu?.sections?.map((section) => (
                <details className="group" key={section.label} open>
                    <summary className="h-10 cursor-pointer border-b border-primary px-3.5 leading-10 group-open:text-white">
                        {section.label}
                    </summary>
                    <div className="mt-4 space-y-2">
                        {section.items &&
                            menu.foldres?.map((folder) => (
                                <Folder
                                    folder={folder}
                                    key={folder.folder}
                                    menuItems={section.items ?? []}
                                />
                            ))}
                    </div>
                    {section.Component && section.Component}
                </details>
            ))}
        </aside>
    );
}
