import { RiInstagramFill, RiTwitterXFill } from "@remixicon/react";
import { useTranslations } from "next-intl";

export function AdditionalContacts() {
    const t = useTranslations();

    return (
        <div className="flex flex-col gap-1.5 px-6 py-4 md:px-3.5 md:py-[18px]">
            <a
                className="flex items-center gap-2 hover:text-white"
                href="https://www.instagram.com/"
                rel="noreferrer"
                target="_blank"
            >
                <RiInstagramFill size={16} />
                {t("ContactPage.left-menu.additional-contacts.instagram")}
            </a>
            <a
                className="flex items-center gap-2 hover:text-white"
                href="https://x.com/"
                rel="noreferrer"
                target="_blank"
            >
                <RiTwitterXFill size={16} />
                {t("ContactPage.left-menu.additional-contacts.twitter")}
            </a>
        </div>
    );
}
