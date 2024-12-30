import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { RiArrowRightSLine, RiFolder3Fill } from "@remixicon/react";
import { File } from "./file";
import { FolderType, MenuItem } from "./hooks/use-page-menu";

interface Props {
    folder: FolderType;
    folderArrowIconSize?: number;
    menuItems: MenuItem[];
}

export function Folder(props: Props) {
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);

    const menuItems = props.menuItems.filter(
        (menuItem) => menuItem.folder === props.folder.folder,
    );

    useEffect(() => {
        setIsOpen(menuItems.some((item) => pathname.includes(item.href)));
    }, [menuItems, pathname]);

    return (
        <details className="group/folder px-5 md:px-3.5" open={isOpen}>
            <summary className="flex cursor-pointer list-none items-center gap-2 hover:text-white [&::-webkit-details-marker]:hidden">
                <RiArrowRightSLine
                    className="group-open/folder:rotate-90"
                    size={props.folderArrowIconSize ?? 24}
                />
                <RiFolder3Fill color={props.folder.color} size={16} />
                {props.folder.label}
            </summary>
            <div className="mt-2 flex flex-col gap-2 pl-8">
                {menuItems.map((menuItem) => (
                    <File key={menuItem.label} menuItem={menuItem} />
                ))}
            </div>
        </details>
    );
}
