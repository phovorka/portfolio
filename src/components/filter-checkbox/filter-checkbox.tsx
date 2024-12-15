import { RiCheckFill } from "@remixicon/react";
import { Checkbox } from "react-aria-components";
import { cn } from "@/lib/utils";
import { FilterType } from "../projects-filter/constants";

interface Props {
    filter: FilterType;
}

export function FilterCheckbox(props: Props) {
    return (
        <Checkbox value={props.filter.id}>
            {({ isHovered, isSelected }) => (
                <div
                    className={cn(
                        "flex items-center gap-6",
                        isHovered && "cursor-pointer",
                    )}
                >
                    <div
                        aria-hidden="true"
                        className={cn(
                            "flex size-5 items-center justify-center rounded-sm border border-secondary-lightBlue text-white",
                            isSelected && "bg-secondary-lightBlue",
                        )}
                    >
                        {isSelected && <RiCheckFill size={16} />}
                    </div>
                    <div className="flex items-center gap-2.5">
                        <span
                            className={
                                isHovered || isSelected
                                    ? "opacity-100"
                                    : "opacity-40"
                            }
                        >
                            {props.filter.icon}
                        </span>
                        <span
                            className={
                                isHovered || isSelected
                                    ? "text-white"
                                    : undefined
                            }
                        >
                            {props.filter.label}
                        </span>
                    </div>
                </div>
            )}
        </Checkbox>
    );
}
