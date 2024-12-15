import { useTranslations } from "next-intl";
import { CheckboxGroup, Label } from "react-aria-components";
import { FilterCheckbox } from "../filter-checkbox/filter-checkbox";
import { FILTER_TYPES } from "./constants";

export function ProjectsFilter() {
    const t = useTranslations();

    return (
        <div className="px-3.5 py-[18px]">
            <CheckboxGroup className="flex flex-col gap-2">
                <Label className="sr-only">{t("ProjectsPage.title")}</Label>
                {FILTER_TYPES.map((filter) => (
                    <FilterCheckbox filter={filter} key={filter.id} />
                ))}
            </CheckboxGroup>
        </div>
    );
}
