import { ButtonProps, Button as RAButton } from "react-aria-components";
import { cn } from "@/lib/utils";

interface Props extends ButtonProps {
    variant?: "primary" | "secondary" | "ghost";
}

export function Button(props: Props) {
    const { className, variant, ...restProps } = props;

    return (
        <RAButton
            className={({ isFocused, isHovered }) =>
                cn(
                    "button",
                    `button--variant-${variant ?? "primary"}`,
                    isFocused && "is-focused",
                    isHovered && "is-hovered",
                    className,
                )
            }
            {...restProps}
        />
    );
}
