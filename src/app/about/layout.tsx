import { ReactNode } from "react";
import { PageMenu } from "@/components/page-menu/page-menu";
import { Sidebar } from "@/components/sidebar/sidebar";

interface Props {
    children: ReactNode;
}

export default function AboutPageLayout(props: Props) {
    return (
        <div className="flex grow">
            <Sidebar />
            <PageMenu />
            <div className="grid grid-cols-[242px_auto]">{props.children}</div>
        </div>
    );
}
