"use client";

import { useTranslations } from "next-intl";

export default function PersonalInfoPage() {
    const t = useTranslations();

    return <div>{t("AboutPage.empty-editor")}</div>;
}
