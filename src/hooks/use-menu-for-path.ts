import {
    MenuConfig,
    usePageMenu,
} from "@/components/page-menu/hooks/use-page-menu";

export function useMenuForPath(pathname: string): MenuConfig[] {
    const menuItems = usePageMenu();

    // Define sections to match against
    const sections = ["/about", "/projects"];

    // Find matching sections
    const matchedSections = sections.filter((section) =>
        pathname.includes(section),
    );

    // Collect all menu items for matched sections
    const result = matchedSections.flatMap((section) =>
        Object.entries(menuItems)
            .filter(([key]) => key.includes(section))
            .map(([, value]) => value),
    );

    return result;
}
