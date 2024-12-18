import { RiInstagramFill, RiTwitterXFill } from "@remixicon/react";
import { useTranslations } from "next-intl";

export function AdditionalContacts() {
    const t = useTranslations();

    return (
        <details className="group border-t border-primary" open>
            <summary className="h-10 cursor-pointer border-b border-primary pl-3.5 leading-10 group-open:text-white">
                {t("ContactPage.left-menu.additional-contacts.title")}
            </summary>
            <div className="flex flex-col gap-1.5 px-3.5 py-[18px]">
                <a
                    className="flex items-center gap-2 hover:text-white"
                    href="https://www.instagram.com/lukirac/"
                    rel="noreferrer"
                    target="_blank"
                >
                    <RiInstagramFill size={16} />
                    {t("ContactPage.left-menu.additional-contacts.instagram")}
                </a>
                <a
                    className="flex items-center gap-2 hover:text-white"
                    href="https://x.com/lukissrac"
                    rel="noreferrer"
                    target="_blank"
                >
                    <RiTwitterXFill size={16} />
                    {t("ContactPage.left-menu.additional-contacts.twitter")}
                </a>
            </div>
        </details>
    );
}
