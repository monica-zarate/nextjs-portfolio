// Vendor imports
"use client";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { caveat } from "../../fonts";
import { AnimatePresence, motion as m } from "framer-motion";

//Project imports
import { pagesContent, routes, disciplines } from "@/app/constants";
import ProjectCard from "@/app/_components/ProjectCard";
import { projects } from "../../constants/projects";
import Loading from "@/app/loading";

export default function Projects() {

    const { copy } = pagesContent.projects;
    const [filteredProjects, setFilteredProjects] = useState([] as any);
    const [selectedTag, setSelectedTag] = useState("");

    const selectDiscipline = (id: string) => {
        if(selectedTag === id){
            setSelectedTag("");
        } else {
            id === disciplines.design ? setSelectedTag(disciplines.design) : setSelectedTag(disciplines.development);
        }
    };

    useEffect(() => {
        if(selectedTag === disciplines.design) {
            setFilteredProjects(projects.filter((project) => project.discipline === disciplines.design));
        } else if(selectedTag === disciplines.development) {
            setFilteredProjects(projects.filter((project) => project.discipline === disciplines.development));
        } else {
            setFilteredProjects(projects);
        }

    }, [selectedTag, projects]);
    
    
    return (
        <AnimatePresence mode="wait">
        <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.3, ease: 'easeInOut'}} exit={{opacity: 0}}>
            <div className="px-8 pt-4 pb-8 lg:pb-32 sm:p-8 2xl:px-0 2xl:pt-12 max-w-7xl mx-auto">
                <h1 className={`${caveat.className} text-lime-950 text-h1Light lg:text-sabe text-center mb-8 lg:mb-12`}>{copy.h1}</h1>
                <div className="mb-8 lg:mb-16">
                    <p className="text-lime-950 text-bodyLargeLight mb-2">{copy.p}</p>
                    <div>
                        <span className={`${selectedTag === disciplines.design ? "text-fuchsia-700 bg-fuchsia-50 ring-fuchsia-700/10" : "text-gray-600 bg-gray-50 ring-gray-500/10"} sm:hover:text-fuchsia-700 sm:hover:bg-fuchsia-50 sm:hover:ring-fuchsia-700/10 inline-flex items-center rounded-md px-2 py-1 text-sm font-medium ring-1 ring-inset w-fit capitalize cursor-pointer mr-2 delay-200 duration-200 ease-in-out`} onClick={() => selectDiscipline(disciplines.design)}>{disciplines.design}</span>
                        <span className={`${selectedTag === disciplines.development ? "text-lime-700 bg-lime-50 ring-lime-700/10" : "text-gray-600 bg-gray-50 ring-gray-500/10"} sm:hover:text-lime-700 sm:hover:bg-lime-50 sm:hover:ring-lime-700/10 inline-flex items-center rounded-md px-2 py-1 text-sm font-medium ring-1 ring-inset w-fit capitalize cursor-pointer delay-200 duration-200 ease-in-out`} onClick={() => selectDiscipline(disciplines.development)}>{disciplines.development}</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 xl:grid-cols-3 2xl:gap-x-12 2xl:gap-y-12">
                    {filteredProjects.reverse().map((__: any, i: number) => (
                        <Suspense key={i} fallback={<Loading/>}>
                            <Link href={`/${routes[0].id}/${__.path}`} className={`${i % 2 ? "sm:mr-auto" : "sm:ml-auto"} max-sm:mx-auto`}>
                                <ProjectCard {...__} />
                            </Link>
                        </Suspense>
                    ))}
                </div>
            </div>
            </m.div>
        </AnimatePresence>
    )
}