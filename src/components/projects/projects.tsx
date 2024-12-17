"use client";

import { useSearchParams } from "next/navigation";
import { PROJECTS } from "@/config/constants";
import { Technology } from "@/config/types";
import { ProjectTile } from "../project-tile/project-tile";

export function Projects() {
    const searchParams = useSearchParams();

    const selectedLanguages = searchParams.get("language")?.split(",") ?? [];

    const filteredProjects = PROJECTS.filter((project) =>
        selectedLanguages.every((lang) =>
            project.technologies.includes(lang as Technology),
        ),
    );

    return (
        <div className="grid auto-rows-fr gap-10 lg:grid-cols-2 2xl:grid-cols-3">
            {filteredProjects.map((project) => (
                <ProjectTile key={project.id} project={project} />
            ))}
        </div>
    );
}
