import { MenuItems } from "@/components/page-menu/hooks/use-page-menu";

export function getBasePath(
    menuItems: MenuItems,
    pathname: string,
): string | undefined {
    return Object.keys(menuItems).find((key) => pathname.startsWith(key));
}
