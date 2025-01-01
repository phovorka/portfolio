"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { RiCloseFill } from "@remixicon/react";
import { useTranslations } from "next-intl";
import { FILTER_TYPES } from "@/components/projects-filter/constants";
import { Projects } from "@/components/projects/projects";
import { isNotEmpty } from "@/utils/is-not-empty";

export default function ProjectsPage() {
    const t = useTranslations();

    const searchParams = useSearchParams();

    const selectedLanguages = searchParams.get("language")?.split(",") ?? [];

    const languageNames = FILTER_TYPES.filter((filter) =>
        selectedLanguages.includes(filter.id),
    ).map((filter) => filter.label);

    return (
        <>
            <div className="h-10 border-b border-primary max-md:hidden">
                {isNotEmpty(selectedLanguages) && (
                    <div className="flex h-full w-fit items-center gap-12 border-r border-primary px-3">
                        <div>{languageNames.join("; ")}</div>
                        <Link className="hover:text-white" href="/projects">
                            <RiCloseFill />
                        </Link>
                    </div>
                )}
            </div>
            <div className="max-h-[calc(100dvh-var(--header-height)-var(--footer-height)-var(--sidebar-mobile-height)-56px-32px)] overflow-y-auto px-8 py-4 md:max-h-[calc(100vh-var(--header-height)-var(--footer-height)-40px-128px)]">
                <p className="mb-4 md:hidden">
                    <span>
                        &#47;&nbsp;
                        {isNotEmpty(languageNames)
                            ? languageNames.join("; ")
                            : t("Common.all")}
                    </span>
                </p>
                <Projects />
            </div>
        </>
    );
}
