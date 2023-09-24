// Vendor imports
"use client";
import Link from "next/link";
import { caveat } from "../../fonts";
import { AnimatePresence, motion as m } from "framer-motion";

//Project imports
import { pagesContent, routes } from "@/app/constants";
import ProjectCard from "@/app/_components/ProjectCard";
import { projects } from "../../constants/projects";

export default function Projects() {

    const { copy } = pagesContent.projects;
    return (
        <AnimatePresence mode="wait">
        <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.3, ease: 'easeInOut'}} exit={{opacity: 0}}>
            <div className="px-8 pt-4 pb-8 lg:pb-32 sm:p-8 2xl:px-0 2xl:pt-12 max-w-7xl mx-auto">
                <h1 className={`${caveat.className} text-lime-950 text-h1Light lg:text-sabe text-center mb-8 2xl:mb-12`}>{copy.h1}</h1>
                <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 xl:grid-cols-3 2xl:gap-x-12 2xl:gap-y-12">
                    {projects.reverse().map((__: any, i: number) => (
                        <Link href={`/${routes[0].id}/${__.path}`} key={i} className={`${i % 2 ? "sm:mr-auto" : "sm:ml-auto"} max-sm:mx-auto`}>
                            <ProjectCard {...__} />
                        </Link>
                    ))}
                </div>
            </div>
            </m.div>
        </AnimatePresence>
    )
}