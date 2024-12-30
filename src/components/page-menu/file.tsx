import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMarkdownFill } from "@remixicon/react";
import { cn } from "@/lib/utils";
import { MenuItem } from "./hooks/use-page-menu";

interface Props {
    menuItem: MenuItem;
}

export function File(props: Props) {
    const pathname = usePathname();

    return (
        <Link
            className={cn(
                "flex items-center gap-2 hover:text-white",
                pathname.includes(props.menuItem.href) && "text-white",
            )}
            href={props.menuItem.href}
            key={props.menuItem.label}
        >
            <RiMarkdownFill color="#81A1C1" size={16} />
            {props.menuItem.label}
        </Link>
    );
}
