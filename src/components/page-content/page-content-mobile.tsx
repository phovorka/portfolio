import { useTranslations } from "next-intl";

interface Props {
    fileContent: string;
    pageContentLabel: string;
}

export function PageContentMobile(props: Props) {
    const t = useTranslations();

    return (
        <div className="overflow-y-auto px-7 py-9 max-md:max-h-[calc(100dvh-32px-var(--header-height)-56px-var(--sidebar-mobile-height)-var(--footer-height))] md:hidden">
            <p className="mb-4">
                <span className="text-white">
                    &#47;&#47;&nbsp;
                    {t("AboutPage.left-menu.personal-info.title")}
                </span>
                &nbsp; &#47;&nbsp;{props.pageContentLabel}
            </p>
            <p>{props.fileContent}</p>
        </div>
    );
}
