import Link from "next/link";
import { RiCloseFill } from "@remixicon/react";
import { usePageMenu } from "../page-menu/hooks/use-page-menu";

interface Props {
    slug: string;
}

export function PageContent(props: Props) {
    const menuItems = usePageMenu();
    const pageContent = menuItems["/about/personal-info"].menuItems.find(
        (item) => item.href.includes(props.slug),
    );

    if (!pageContent) {
        return <div>Page not found</div>;
    }

    return (
        <>
            <div className="h-10 border-b border-primary">
                <div className="flex h-full w-fit items-center gap-12 border-r border-primary px-3">
                    {pageContent.label}
                    <Link
                        className="hover:text-white"
                        href="/about/personal-info"
                    >
                        <RiCloseFill />
                    </Link>
                </div>
            </div>
            <div>PageContent for: {props.slug}</div>
        </>
    );
}
