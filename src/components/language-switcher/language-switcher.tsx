import { Dispatch, SetStateAction } from "react";
import { LanguageButton } from "./language-button";

interface Props {
    className?: string;
    locale: string;
    setIsNavigationOpen: Dispatch<SetStateAction<boolean>>;
}

export function LanguageSwitcher(props: Props) {
    return (
        <div className={props.className}>
            <LanguageButton
                isActive={props.locale === "en"}
                locale="en"
                setIsNavigationOpen={props.setIsNavigationOpen}
            />
            <LanguageButton
                className="max-lg:border-r"
                isActive={props.locale === "cs"}
                locale="cs"
                setIsNavigationOpen={props.setIsNavigationOpen}
            />
        </div>
    );
}
