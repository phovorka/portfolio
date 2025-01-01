import { PageContentLabelMobile } from "./page-content-label-mobile";

interface Props {
    fileContent: string;
    pageContentLabel: string;
}

export function PageContentMobile(props: Props) {
    return (
        <div className="overflow-y-auto px-7 py-9 max-md:max-h-[calc(100dvh-32px-var(--header-height)-56px-var(--sidebar-mobile-height)-var(--footer-height))] md:hidden">
            <PageContentLabelMobile />
            <p>{props.fileContent}</p>
        </div>
    );
}
