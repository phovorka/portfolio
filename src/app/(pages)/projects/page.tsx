"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { RiCloseFill } from "@remixicon/react";
import { FILTER_TYPES } from "@/components/projects-filter/constants";
import { Projects } from "@/components/projects/projects";
import { isNotEmpty } from "@/utils/is-not-empty";
import { revalidateProjects } from "@/utils/revalidate-projects";

export default function ProjectsPage() {
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
                        <Link
                            className="hover:text-white"
                            href="/projects"
                            onClick={revalidateProjects}
                        >
                            <RiCloseFill />
                        </Link>
                    </div>
                )}
            </div>
            <div className="overflow-y-auto px-8 py-4 md:max-h-[calc(100vh-var(--header-height)-var(--footer-height)-40px-128px)]">
                <Projects />
            </div>
        </>
    );
}
