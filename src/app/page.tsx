import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations();

    return (
        <main className="grow md:grid md:grid-cols-[312px_1fr_312px]">
            <div />
            <div>{t("HomePage.title")}</div>
            <div />
        </main>
    );
}
