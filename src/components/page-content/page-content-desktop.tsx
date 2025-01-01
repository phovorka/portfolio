import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Tab } from "./tab";

interface Props {
    fileContent: string;
    pageContentLabel: string;
}

export function PageContentDesktop(props: Props) {
    return (
        <>
            <div className="h-10 border-b border-primary max-md:hidden">
                <Tab />
            </div>
            <div className="overflow-y-auto px-8 py-4 max-md:hidden md:max-h-[calc(100dvh-var(--header-height)-var(--footer-height)-40px-128px)]">
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
