import { Technology } from "@/config/types";

export type LanguageFilterChangeHandler = (
    filterId: Technology,
    isSelected: boolean,
) => void;
