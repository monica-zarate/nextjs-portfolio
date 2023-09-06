// Vendor imports
"use client";
import Link from "next/link";
import { caveat } from "../fonts";

// Project imports
import { pagesContent, routes } from "@/app/constants";
import ProjectCard from "@/app/_components/ProjectCard";
import { projects } from "../constants/projects";

export default function Featured() {
    return (
        <div className="border-t border-solid border-neutral-200">
            <div className="px-8 py-16 2xl:px-0 2xl:py-12 max-w-7xl mx-auto">
                <h2 className={`${caveat.className} text-lime-950 text-h2 text-center mb-8 2xl:mb-12`}>{pagesContent.featured.copy.h2}</h2>
                <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 2xl:gap-x-12 2xl:gap-y-12">
                    {projects.reverse().filter(project => project.isFeatured).map((__: any, i: number) => (
                        <Link href={`/${routes[0].id}/${__.path}`} key={i} className={`${i % 2 ? "sm:mr-auto" : "sm:ml-auto"} max-sm:mx-auto max-w-[392.67px]`}>
                            <ProjectCard {...__} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}