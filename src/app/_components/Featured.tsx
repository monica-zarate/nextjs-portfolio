// Vendor imports
"use client";
import Link from "next/link";
import { caveat } from "../fonts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

// Project imports
import { pagesContent, routes } from "@/app/constants";
import ProjectCard from "@/app/_components/ProjectCard";
import { projects } from "../constants/projects";
import RevealElement from "./RevealElement";

export default function Featured() {

    const { copy } = pagesContent.featured;
    
    return (
        <div className="border-t border-solid border-neutral-200">
            <div className="px-8 py-16 lg:pb-32 2xl:px-0 2xl:pt-12 max-w-7xl mx-auto">
                <h2 className={`${caveat.className} text-lime-950 text-h1Light lg:text-sabe text-center mb-8 2xl:mb-12`}>{copy.h2}</h2>
                <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 2xl:gap-x-12 2xl:gap-y-12">
                    {projects.reverse().filter(project => project.isFeatured).map((__: any, i: number) => (
                        <Link href={`/${routes[0].id}/${__.path}`} key={i} className={`${i % 2 ? "sm:mr-auto" : "sm:ml-auto"} max-sm:mx-auto max-w-[392.67px]`}>
                            <ProjectCard {...__} />
                        </Link>
                    ))}
                </div>
                <div className="block mt-8 w-fit mx-auto">
                    <RevealElement>
                        <Link href={`/${routes[0].id}`} className="flex items-center">
                            <span className="text-lime-950 text-bodyLarge hover:text-fuchsia-700 delay-200 duration-200 ease-in-out uppercase block">{copy.cta}</span>
                            <FontAwesomeIcon icon={faChevronRight} style={{color: "#1A2E3A"}} className="w-5 h-5 delay-200 duration-200 ease-in-out"/>
                        </Link>
                    </RevealElement>
                </div>
            </div>
        </div>
    )
}