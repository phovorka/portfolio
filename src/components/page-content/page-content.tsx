import { ReactNode } from "react";
import { PageContentDesktop } from "./page-content-desktop";
import { PageContentMobile } from "./page-content-mobile";

interface Props {
    children: ReactNode;
    slug: string;
}

export function PageContent(props: Props) {
    return (
        <>
            <PageContentDesktop>{props.children}</PageContentDesktop>
            <PageContentMobile>{props.children}</PageContentMobile>
        </>
    );
}
