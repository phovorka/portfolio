import { useFormatter } from "next-intl";
import { UseFormWatch } from "react-hook-form";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/styles";
import { ContactFormData } from "./contact-form";

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

    const formData = props.watch();

    const codeString = `
// User's Contact Information:
// Name: ${formData.name || "N/A"}
// Email: ${formData.email || "N/A"}
// Date: ${formattedDate}

${formData.message || "// No message provided."}
`;

    return (
        <SyntaxHighlighter language="typescript" style={vscDarkPlus}>
            {codeString}
        </SyntaxHighlighter>
    );
}
