// Vendor imports
"use client";
import React, { useState, useEffect, Suspense } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion as m } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

// Project imports
import { projects } from "../../../constants/projects";
import { pagesContent, routes } from "@/app/constants";
import RevealElement from "@/app/_components/RevealElement";
import Modal from "../../../_components/Modal";
import { disciplines } from "@/app/constants";
import Loading from "@/app/loading";


const getCTAs = (project: any) => {

    const { links } = pagesContent.projectDetails.copy;

    return (
    <div>
        {project.links.repo && <Link href={project.links.repo} title={project.links.repoTitle} target="_blank" rel="noreferrer" className="text-lime-950 text-bodyLarge hover:text-fuchsia-700 delay-200 duration-200 ease-in-out uppercase block mb-2 w-fit">{links.github}</Link>}
        {project.links.figmaPrototype && <Link href={project.links.figmaPrototype} title={project.links.figmaPrototypeTitle} target="_blank" rel="noreferrer" className="text-lime-950 text-bodyLarge hover:text-fuchsia-700 delay-200 duration-200 ease-in-out uppercase block mb-2 w-fit">{links.figma}</Link>}
        {project.links.xdPrototype && <Link href={project.links.xdPrototype} title={project.links.xdPrototypeTitle} target="_blank" rel="noreferrer" className="text-lime-950 text-bodyLarge hover:text-fuchsia-700 delay-200 duration-200 ease-in-out uppercase block mb-2 w-fit">{links.adobeXd}</Link>}
        {project.links.site && <Link href={project.links.site} title={project.links.siteTitle} target="_blank" rel="noreferrer" className="text-lime-950 text-bodyLarge hover:text-fuchsia-700 delay-200 duration-200 ease-in-out uppercase block mb-2 w-fit">{links.website}</Link>}
        {project.links.internalLink && <Link href={project.links.internalLink} title={project.links.internalLinkTitle} className="text-lime-950 text-bodyLarge hover:text-fuchsia-700 delay-200 duration-200 ease-in-out uppercase block mb-2 w-fit">{project.links.internalLinkTitle}</Link>}
    </div>
    );
};

const lowercaseString = (string : string) => {
    return string.toLowerCase().replaceAll(' ', '');
};


export default function ProjectDetails() {

    const [selectedStep, setSelectedStep] = useState("");
    const [selected, setSelected] = useState<string | any >("");
    const projectPath = usePathname().split("/");
    const project = projects.filter((__) => __.path === projectPath[2])[0];
    const sectionIds = project.steps.map((__) => __.name);
    const {copy, ids} = pagesContent.projectDetails;
    const { cta } = pagesContent.featured.copy;

    const stepScroll = (id: string) => {
        const section = document.querySelector(`#${id}`);
        section?.scrollIntoView( { behavior: 'smooth', block: 'start' } );
        setSelectedStep(id);
    };

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);


    return (
        <AnimatePresence mode="wait">
            <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.3, ease: 'easeInOut'}} exit={{opacity: 0}}>
                <Suspense fallback={<Loading/>}>
                <div className="px-8 py-4 sm:p-8 2xl:px-0 2xl:py-12 max-w-7xl mx-auto">
                    <div className="mb-4">
                        <h1 className="text-lime-700 text-h1Light">{project.title}</h1>
                        <p className="text-lime-950 text-bodyLargeLight mb-4">{project.subtitle}</p>
                        {project.disciplines.map((discipline, i) => (
                            <span key={i} className={`${discipline === disciplines.design ? "text-fuchsia-700 bg-fuchsia-50 ring-fuchsia-700/10" : "text-lime-700 bg-lime-50 ring-lime-700/10"} inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset mb-4 w-fit capitalize mr-2`}>{discipline}</span>
                        ))}
                        <RevealElement>
                            <Image src={project.images.featuredImg} alt={project.images.featuredImgAlt}/>
                        </RevealElement>
                    </div>
                    <div className="md:flex">
                        <div className="mb-16 basis-1/4">
                            <h3 className="text-lime-700 text-h3 mb-2">{copy.tools.h3}</h3>
                            <RevealElement>
                                <ul>
                                    {project.tools.map((tool, i) => (
                                        <li key={i} className="flex items-end mb-2">
                                        <Image src={tool.icon} alt={tool.name} className="h-8 w-auto mr-2"/>
                                        <p className="text-lime-950 text-body">{tool.name}</p>
                                    </li>
                                    ))}
                                </ul>
                            </RevealElement>
                        </div>
                        <div className="mb-16 basis-3/4">
                            <RevealElement>
                                <h3 className="text-lime-700 text-h3 mb-2">{copy.overview.h3}</h3>
                                <p className="text-lime-950 text-body mb-2">{project.description}</p>
                                {getCTAs(project)}
                            </RevealElement>
                        </div>
                    </div>            
                    <div className="md:flex md:items-start">
                        <ul className="hidden md:block md:basis-1/4 sticky top-24">
                            <RevealElement>
                                <li>
                                    <p onClick={() => stepScroll(ids.intro)} className={`${selectedStep === ids.intro ? "text-lime-700" : "text-neutral-400"} text-bodyLarge hover:text-lime-700 delay-200 duration-200 ease-in-out uppercase block mb-2 w-fit cursor-pointer`}>{copy.steps.h3}</p>
                                </li>
                            </RevealElement>
                            {sectionIds.map((section, i) => (
                                <RevealElement key={i}>
                                    <li>
                                        <p onClick={() => stepScroll(lowercaseString(section))} className={`${selectedStep === lowercaseString(section) ? "text-lime-700" : "text-neutral-400"} text-bodyLarge hover:text-lime-700 delay-200 duration-200 ease-in-out uppercase block mb-2 w-fit cursor-pointer`}>{section}</p>
                                    </li>
                                </RevealElement>
                            ))}
                            {project.path !== ids.guavaPunch && <RevealElement>
                                <li>
                                    <p onClick={() => stepScroll(ids.learnMore)} className={`${selectedStep === ids.learnMore ? "text-lime-700" : "text-neutral-400"} text-bodyLarge hover:text-lime-700 delay-200 duration-200 ease-in-out uppercase block mb-2 w-fit cursor-pointer`}>{copy.ctas.h3}</p>
                                </li>
                            </RevealElement>}
                        </ul>
                        <div className="md:basis-3/4">
                            <div id={ids.intro} className="mb-8 scroll-mt-24">
                                <RevealElement>
                                    <h3 className="text-lime-700 text-h3 mb-2">{copy.steps.h3}</h3>
                                    {project.intro.map((p, i) => (
                                        <p key={i} className="text-lime-950 text-body mb-4">{p}</p>
                                    ))}
                                </RevealElement>
                            </div>
                            {project.steps.map((step, i) => (
                                <div id={lowercaseString(step.name)} key={i} className="mb-8 scroll-mt-24">
                                    <RevealElement>
                                        <h3 className="text-lime-700 text-h3 mb-2">{step.name}</h3>
                                        {step.description.map((p, x) => (
                                            <p key={x} className="text-lime-950 text-body mb-4">{p}</p>
                                        ))}
                                        {step.imgs && step.imgs.map((image, j) => (
                                            <m.div
                                                key={j} 
                                                onClick={() => setSelected(image)} 
                                                whileHover={{translateY: -2, transition: { duration: 0.2 }}} 
                                                whileTap={{scale: 0.95}}
                                                className="cursor-pointer shadow-md">
                                                    <Image src={image} alt={step.name}/>  
                                            </m.div>
                                        ))}
                                    </RevealElement>
                                </div>
                            ))}
                            {project.path !== ids.guavaPunch && <div className="mb-8 scroll-mt-24">
                                <RevealElement>
                                    <h3 id={ids.learnMore} className="text-lime-700 text-h3 mb-2">{copy.ctas.h3}</h3>
                                    {getCTAs(project)}
                                </RevealElement>
                            </div>}
                        </div>
                    </div>
                    <div className="block mt-16 mb-8 w-fit mx-auto">
                        <RevealElement>
                            <Link href={`/${routes[0].id}`} className="flex items-center">
                                <FontAwesomeIcon icon={faChevronLeft} style={{color: "#1A2E3A"}} className="w-5 h-5 delay-200 duration-200 ease-in-out"/>
                                <span className="text-lime-950 text-bodyLarge hover:text-fuchsia-700 delay-200 duration-200 ease-in-out uppercase block">{cta}</span>
                            </Link>
                        </RevealElement>
                    </div>
                    <Modal selected={selected} setSelected={setSelected} />
                </div>
                </Suspense>
            </m.div>
        </AnimatePresence>
    )
}