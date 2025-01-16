import { ReactNode } from "react";
import { RiTerminalBoxFill, RiUser4Fill } from "@remixicon/react";

type Route = {
    path: string;
    label: keyof IntlMessages["AboutPage"]["sidebar"];
    icon: ReactNode;
};

export const routes: Route[] = [
    {
        path: "/about/personal-info",
        label: "personal-info",
        icon: <RiUser4Fill />,
    },
    {
        path: "/about/professional-info",
        label: "professional-info",
        icon: <RiTerminalBoxFill />,
    },
    /* {
        path: "/about/hobbies",
        label: "Hobbies",
        icon: <RiGamepadFill />,
    }, */
];
