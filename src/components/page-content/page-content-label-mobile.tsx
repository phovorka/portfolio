"use client";

import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { getBasePath } from "@/utils/get-base-path";
import { usePageMenu } from "../page-menu/hooks/use-page-menu";

export function PageContentLabelMobile() {
    const t = useTranslations();

    const pathname = usePathname();

    const menuItems = usePageMenu();
    const basePath = getBasePath(menuItems, pathname);
    const menu = basePath ? menuItems[basePath] : undefined;

    const label = menu?.sections?.map((section) =>
        section.items?.find((item) => item.href === pathname),
    );

    return (
        <p className="mb-4">
            <span className="text-white">
                &#47;&#47;&nbsp;
                {t("AboutPage.left-menu.personal-info.title")}
            </span>
            &nbsp; &#47;&nbsp;{label?.at(0)?.label}
        </p>
    );
}
