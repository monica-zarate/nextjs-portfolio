// Vendor imports
"use client";
import Image from "next/image";
import { Suspense } from "react";
import Link from "next/link";
import { AnimatePresence, motion as m } from "framer-motion";

//Project imports
import { pagesContent, routes } from "@/app/constants";
import { projects } from "../../constants/projects";
import Loading from "@/app/loading";
import RevealElement from "@/app/_components/RevealElement";

export default function Projects() {

    const { copy } = pagesContent.projects;

    
    return (
        <AnimatePresence mode="wait">
            <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.3, ease: 'easeInOut'}} exit={{opacity: 0}}>
                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:max-w-4xl">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{copy.h2}</h2>
                            <p className="mt-2 text-lg leading-8 text-gray-600">
                                {copy.p}
                            </p>
                            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                                {projects.map((project) => (
                                    <Suspense key={project.id} fallback={<Loading/>}>
                                        <RevealElement>
                                            <article className="relative isolate flex flex-col gap-8 lg:flex-row">
                                                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                                                    <Image
                                                        src={project.images.thumb}
                                                        alt={project.images.thumbAlt}
                                                        className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                                                    />
                                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                                </div>
                                                <div>
                                                    <div className="group relative max-w-xl">
                                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-amber-700 group-hover:text-amber-600">
                                                        <Link href={`/${routes[0].id}/${project.path}`}>
                                                            <span className="absolute inset-0" />
                                                            {project.title}
                                                        </Link>
                                                        </h3>
                                                        <p className="mt-5 text-sm leading-6 text-gray-600">{project.description}</p>
                                                    </div>
                                                    <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                                                        <div className="relative flex items-center gap-x-4">
                                                            <div className="text-sm leading-6">
                                                                <ul className="flex items-center gap-x-4 text-xs">
                                                                    {project.tools.map((tool, i) => (
                                                                        <li
                                                                        key={i}
                                                                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600"
                                                                        >
                                                                        {tool}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </RevealElement>
                                    </Suspense>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </m.div>
        </AnimatePresence>
    )
}