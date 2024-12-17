"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "react-aria-components";
import { Project } from "@/config/types";
import { cn } from "@/lib/utils";

interface Props {
    project: Project;
}

export function ProjectTile(props: Props) {
    const t = useTranslations();

    return (
        <div className="flex flex-col gap-3.5">
            <p className="flex flex-wrap gap-2">
                <span className="font-bold text-secondary-blue">
                    {props.project.title}
                </span>
                <span>
                    &#47;&#47; _
                    {props.project.type === "app"
                        ? t("ProjectsPage.project.web-app")
                        : t("ProjectsPage.project.web")}
                </span>
            </p>
            <div className="bg-primary-light grow overflow-hidden rounded-2xl border border-primary">
                <div>
                    <Image
                        alt={props.project.title}
                        className="h-40 border-b border-primary object-cover"
                        priority
                        src={props.project.image}
                    />
                </div>
                <div className="flex flex-col items-start gap-[22px] p-8 pt-6">
                    <p>{props.project.description}</p>
                    {props.project.link && (
                        <Link
                            className={({ isFocused, isHovered }) =>
                                cn(
                                    "button",
                                    isFocused && "is-focused",
                                    isHovered && "is-hovered",
                                )
                            }
                            href={props.project.link}
                            target="_blank"
                        >
                            {t("ProjectsPage.project.button.view-project")}
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
