import { ReactNode } from "react";
import { Tab } from "./tab";

interface Props {
    children: ReactNode;
}

export function PageContentDesktop(props: Props) {
    return (
        <>
            <div className="h-10 border-b border-primary max-md:hidden">
                <Tab />
            </div>
            <div className="overflow-y-auto px-8 py-4 max-md:hidden md:max-h-[calc(100dvh-var(--header-height)-var(--footer-height)-40px-128px)]">
                {props.children}
            </div>
        </>
    );
}
