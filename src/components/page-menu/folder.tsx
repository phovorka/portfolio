import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { RiArrowRightSLine, RiFolder3Fill } from "@remixicon/react";
import { File } from "./file";
import { FolderType, MenuItem } from "./hooks/use-page-menu";

interface Props {
    folder: FolderType;
    color: string;
    menuItems: MenuItem[];
}

export function Folder(props: Props) {
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(menuItems.some((item) => pathname.includes(item.href)));
    }, []);

    const menuItems = props.menuItems.filter(
        (menuItem) => menuItem.folder === props.folder.folder,
    );

    return (
        <details className="group/folder" open={isOpen}>
            <summary className="flex cursor-pointer list-none items-center gap-2 hover:text-white [&::-webkit-details-marker]:hidden">
                <RiArrowRightSLine
                    className="group-open/folder:rotate-90"
                    size={24}
                />
                <RiFolder3Fill color={props.color} size={16} />
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
