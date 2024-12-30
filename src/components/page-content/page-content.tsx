import fs from "fs";
import { useLocale } from "next-intl";
import path from "path";
import { PageContentDesktop } from "./page-content-desktop";
import { PageContentMobile } from "./page-content-mobile";

interface Props {
    slug: string;
}

export function PageContent(props: Props) {
    const locale = useLocale();

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

    return (
        <>
            <PageContentDesktop
                fileContent={fileContent}
                pageContentLabel={props.slug}
            />
            <PageContentMobile
                fileContent={fileContent}
                pageContentLabel={props.slug}
            />
        </>
    );
}
