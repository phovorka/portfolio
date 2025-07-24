import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations();

    return (
        <main className="grid grow md:grid-cols-[312px_1fr_312px]">
            <div />
            <div className="place-content-center max-lg:px-6">
                <div>
                    <p className="text-lg text-white">
                        {t("HomePage.hero.subtitle")}
                    </p>
                    <h1 className="text-[62px] leading-tight text-white">
                        {t("HomePage.hero.title")}
                    </h1>
                    <p className="text-xl text-secondary-blue lg:text-[32px]">
                        &gt; {t("HomePage.hero.position")}
                    </p>
                    <p className="mt-20">
                        &#47;&#47; {t("HomePage.hero.github-comment")}
                    </p>
                    <p className="text-white max-lg:text-sm">
                        <span className="text-secondary-blue">const</span>{" "}
                        <span className="text-accent-mint">githubLink</span> ={" "}
                        <span className="text-accent-pink">
                            &quot;
                            <a
                                className="underline"
                                href="https://github.com/PetrHovorka"
                                rel="noreferrer"
                                target="_blank"
                            >
                                https://github.com/PetrHovorka
                            </a>
                            &quot;
                        </span>
                    </p>
                </div>
            </div>
            <div />
        </main>
    );
}
