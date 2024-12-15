"use client";

import { useTranslations } from "next-intl";

export default function PersonalInfoPage() {
    const t = useTranslations();

    return <div className="px-8 py-4">{t("AboutPage.empty-editor")}</div>;
}
