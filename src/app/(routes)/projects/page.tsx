// Vendor imports
"use client";
import { caveat } from "../../fonts";

//Project imports
import { pagesContent } from "@/app/constants";
import ProjectCard from "@/app/_components/ProjectCard";
import { projects } from "../../constants/projects";

export default function Projects() {
    return (
        <div className="px-8 py-4 sm:p-8 2xl:px-0 2xl:py-12 max-w-7xl mx-auto">
            <h1 className={`${caveat.className} text-lime-950 text-h1Light text-center mb-8 2xl:mb-12`}>{pagesContent.projects.copy.h1}</h1>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 xl:grid-cols-3 2xl:gap-x-12 2xl:gap-y-12">
                {projects.reverse().map((__: {}, i: number) => (
                    <li key={i} className={i % 2 ? "mr-auto" : "ml-auto"}>
                        <ProjectCard {...__} />
                    </li>
                ))}
            </ul>
        </div>
    )
}