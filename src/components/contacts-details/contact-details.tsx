import { RiMailFill, RiPhoneFill } from "@remixicon/react";
import { useTranslations } from "next-intl";

export function ContactDetails() {
    const t = useTranslations();

    return (
        <details className="group" open>
            <summary className="h-10 cursor-pointer border-b border-primary pl-3.5 leading-10 group-open:text-white">
                {t("AboutPage.left-menu.personal-info.contacts")}
            </summary>
            <div className="flex flex-col gap-1.5 px-3.5 py-[18px]">
                <a
                    className="flex items-center gap-2 hover:text-white"
                    href="mailto:lukiss482@gmail.com"
                >
                    <RiMailFill size={16} />
                    lukiss482@gmail.com
                </a>
                <a
                    className="flex items-center gap-2 hover:text-white"
                    href="tel:+420604305632"
                >
                    <RiPhoneFill size={16} /> +420 604 305 632
                </a>
            </div>
        </details>
    );
}
