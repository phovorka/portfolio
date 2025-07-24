import { useFormatter } from "next-intl";
import { UseFormWatch } from "react-hook-form";
import { ContactFormData } from "./contact-form";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";


interface Props {
    watch: UseFormWatch<ContactFormData>;
}

export function ContactFormCode(props: Props) {
    const format = useFormatter();
    const date = new Date();
    const formattedDate = format.dateTime(date, {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
    });

    return (
        <div className="pt-14 max-md:hidden">
            <SyntaxHighlighter
                codeTagProps={{ style: { background: "#011627" } }}
                customStyle={{
                    background: "#011627",
                }}
                language="javascript"
                lineProps={{
                    style: {
                        fontFamily: "var(--font-fira-code)",
                        wordBreak: "break-word",
                        whiteSpace: "pre-wrap",
                    },
                }}
                showLineNumbers
                style={okaidia}
                wrapLines
            >{`const button = document.querySelector('#submit-button');

const message = {
 name: "${props.watch("name")}",
 email: "${props.watch("email")}",
 message: "${props.watch("message")}",
 date: "${formattedDate}"
}

button.addEventListener('click', () => {
 form.send(name, email, message);
})`}</SyntaxHighlighter>
        </div>
    );
}