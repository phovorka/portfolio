import Link from "next/link";
import { RiCloseFill } from "@remixicon/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Props {
    fileContent: string;
    pageContentLabel: string;
}

export function PageContentDesktop(props: Props) {
    return (
        <>
            <div className="h-10 border-b border-primary max-md:hidden">
                <div className="flex h-full w-fit items-center gap-12 border-r border-primary px-3">
                    {props.pageContentLabel}
                    <Link
                        className="hover:text-white"
                        href="/about/personal-info"
                    >
                        <RiCloseFill />
                    </Link>
                </div>
            </div>
            <div className="overflow-y-auto px-8 py-4 max-md:hidden md:max-h-[calc(100vh-var(--header-height)-var(--footer-height)-40px-128px)]">
                <SyntaxHighlighter
                    customStyle={{
                        backgroundColor: "transparent",
                        color: "#607B96",
                    }}
                    language="typescript"
                    showLineNumbers
                    style={monoBlue}
                >
                    {props.fileContent}
                </SyntaxHighlighter>
            </div>
        </>
    );
}
