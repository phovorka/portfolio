"use client";

import Image from "next/image";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import { useFormatter, useTranslations } from "next-intl";
import { Link } from "react-aria-components";
import { Project } from "@/config/types";
import { cn } from "@/lib/utils";
import { DotButton, useDotButton } from "../carousel/carousel-dot";

interface Props {
    project: Project;
}

export function ProjectTile(props: Props) {
    const t = useTranslations();

    const format = useFormatter();
    const releaseDate = props.project.released
        ? new Date(props.project.released)
        : null;
    const formattedReleaseDate = releaseDate
        ? format.dateTime(new Date(props.project.released), {
              month: "long",
              year: "numeric",
          })
        : t("ProjectsPage.project.not-released");

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { align: "center", containScroll: false },
        [Fade()],
    );
    const { onDotButtonClick, scrollSnaps, selectedIndex } =
        useDotButton(emblaApi);

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
            <div className="flex grow flex-col overflow-hidden rounded-2xl border border-primary bg-primary-light">
                <div className="relative overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {props.project.images.map((image, index) => (
                            <Image
                                alt={props.project.title}
                                className="h-40 min-w-0 flex-[0_0_100%] border-b border-primary object-cover object-top md:h-60"
                                height={260}
                                key={index}
                                placeholder="blur"
                                priority
                                src={image}
                                width={460}
                            />
                        ))}
                    </div>
                    {scrollSnaps.length > 1 && (
                        <div className="absolute bottom-2 flex w-full items-center justify-center gap-1">
                            {scrollSnaps.map((_, index) => (
                                <DotButton
                                    className={cn(
                                        "size-2.5 rounded-full border-2 border-black",
                                        index === selectedIndex
                                            ? "bg-black"
                                            : "bg-white",
                                    )}
                                    key={index}
                                    onClick={() => onDotButtonClick(index)}
                                />
                            ))}
                        </div>
                    )}
                </div>
                <div className="flex grow flex-col items-start gap-[22px] p-8 pt-6">
                    <p>
                        {t(
                            `ProjectsPage.projects.${props.project.description}`,
                        )}
                    </p>
                    <div className="mt-auto flex w-full items-center max-md:flex-col max-md:items-stretch max-md:gap-2 md:min-h-[42px]">
                        {props.project.link && (
                            <Link
                                className={({ isFocused, isHovered }) =>
                                    cn(
                                        "button text-center",
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
                        <p className="flex items-center gap-2 md:ml-auto">
                            <svg
                                className="size-4"
                                fill="none"
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    clipRule="evenodd"
                                    d="m10 16 2-2v-4l1.657-1.657A8 8 0 0 0 16 2.686V0h-2.686a8 8 0 0 0-5.657 2.343L6 4H2L0 6l10 10Zm.5-9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                />
                                <path
                                    d="m4.927 13.756-2.683-2.683L0 15l1 1 3.927-2.244Z"
                                    fill="currentColor"
                                />
                            </svg>
                            {formattedReleaseDate}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
