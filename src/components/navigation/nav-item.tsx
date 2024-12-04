import { ReactNode } from "react";

interface Props {
    className?: string;
    children: ReactNode;
}

export function NavItem(props: Props) {
    return <li className={props.className}>{props.children}</li>;
}
