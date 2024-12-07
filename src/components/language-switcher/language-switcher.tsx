import { LanguageButton } from "./language-button";

interface Props {
    className?: string;
    locale: string;
}

export function LanguageSwitcher(props: Props) {
    return (
        <div className={props.className}>
            <LanguageButton isActive={props.locale === "en"} locale="en" />
            <LanguageButton
                className="max-lg:border-r"
                isActive={props.locale === "cs"}
                locale="cs"
            />
        </div>
    );
}
