import { useTranslations } from "next-intl";

export default function AboutWithoutSlugPage() {
    const t = useTranslations();

    return <div className="px-8 py-4">{t("AboutPage.empty-editor")}</div>;
}
