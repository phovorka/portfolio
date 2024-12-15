import { ReactElement } from "react";
import {
    RiCss3Fill,
    RiHtml5Fill,
    RiJavascriptFill,
    RiNextjsFill,
    RiReactjsFill,
    RiTailwindCssFill,
} from "@remixicon/react";

export type FilterType = {
    icon: ReactElement;
    id: string;
    label: string;
};

export const FILTER_TYPES: FilterType[] = [
    { icon: <RiHtml5Fill />, id: "html", label: "HTML" },
    { icon: <RiCss3Fill />, id: "css", label: "CSS" },
    { icon: <RiHtml5Fill />, id: "sass", label: "Sass" },
    { icon: <RiTailwindCssFill />, id: "tailwind", label: "Tailwind CSS" },
    { icon: <RiJavascriptFill />, id: "js", label: "JavaScript" },
    { icon: <RiHtml5Fill />, id: "jquery", label: "jQuery" },
    { icon: <RiHtml5Fill />, id: "ts", label: "TypeScript" },
    { icon: <RiReactjsFill />, id: "react", label: "React" },
    { icon: <RiNextjsFill />, id: "nextjs", label: "Next.js" },
    { icon: <RiHtml5Fill />, id: "graphql", label: "GraphQL" },
    { icon: <RiHtml5Fill />, id: "restapi", label: "REST API" },
];
