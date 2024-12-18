import { useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { CheckboxGroup, Label } from "react-aria-components";
import { FilterCheckbox } from "../filter-checkbox/filter-checkbox";
import { FILTER_TYPES } from "./constants";
import { LanguageFilterChangeHandler } from "./types";

export function ProjectsFilter() {
    const t = useTranslations();

    const router = useRouter();
    const searchParams = useSearchParams();

    const selectedLanguages = searchParams.get("language")?.split(",") ?? [];

    const handleLanguageFilterChange: LanguageFilterChangeHandler = (
        filterId,
    ) => {
        const updatedLanguages = selectedLanguages.includes(filterId)
            ? selectedLanguages.filter((lang) => lang !== filterId)
            : [...selectedLanguages, filterId];

        const params = new URLSearchParams();
        if (updatedLanguages.length > 0) {
            params.set("language", updatedLanguages.join(","));
        }

        router.push(`/projects?${params.toString()}`);
    };

    return (
        <details className="group" open>
            <summary className="h-10 cursor-pointer border-b border-primary px-3.5 leading-10 group-open:text-white">
                {t("ProjectsPage.left-menu.title")}
            </summary>
            <div className="px-7 py-4 md:px-3.5 lg:py-[18px]">
                <CheckboxGroup
                    className="flex flex-col gap-2"
                    defaultValue={selectedLanguages}
                    key={searchParams.toString()}
                >
                    <Label className="sr-only">{t("ProjectsPage.title")}</Label>
                    {FILTER_TYPES.map((filter) => (
                        <FilterCheckbox
                            filter={filter}
                            key={filter.id}
                            onFilterChange={handleLanguageFilterChange}
                        />
                    ))}
                </CheckboxGroup>
            </div>
        </details>
    );
}
