import fs from "fs";
import { useLocale, useTranslations } from "next-intl";
import path from "path";
import { usePageMenu } from "../page-menu/hooks/use-page-menu";
import { PageContentDesktop } from "./page-content-desktop";
import { PageContentMobile } from "./page-content-mobile";

interface Props {
    slug: string;
}

export function PageContent(props: Props) {
    const t = useTranslations();

    const locale = useLocale();

    const menuItems = usePageMenu();
    const pageContent = menuItems["/about/personal-info"].menuItems?.find(
        (item) => item.href.includes(props.slug),
    );

    let fileContent = "";

    try {
        const filePath = path.join(
            process.cwd(),
            `texts/${locale}`,
            `${props.slug}.txt`,
        );
        fileContent = fs.readFileSync(filePath, "utf-8");
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error("File not found: ", error);
    }

    if (!pageContent) {
        return (
            <div className="px-8 py-4">{t("Common.error.page-not-found")}</div>
        );
    }

    if (!fileContent) {
        return (
            <div className="px-8 py-4">
                {t("Common.error.content-not-found")}
            </div>
        );
    }

    return (
        <>
            <PageContentDesktop
                fileContent={fileContent}
                pageContentLabel={pageContent.label}
            />
            <PageContentMobile
                fileContent={fileContent}
                pageContentLabel={pageContent.label}
            />
        </>
    );
}
