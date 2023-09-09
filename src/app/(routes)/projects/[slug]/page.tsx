// Vendor imports
"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Project imports
import { projects } from "../../../constants/projects";
import { pagesContent } from "@/app/constants";


const getCTAs = (project: any) => (
    <div className="">
        {project.links.repo && <Link href={project.links.repo} title={project.links.repoTitle} target="_blank" rel="noreferrer" className="text-lime-950 text-bodyLargeBold hover:text-fuchsia-700 delay-200 duration-200 ease-in-out uppercase block mb-2 w-fit">GitHub Repository</Link>}
        {project.links.figmaPrototype && <Link href={project.links.figmaPrototype} title={project.links.figmaPrototypeTitle} target="_blank" rel="noreferrer" className="text-lime-950 text-bodyLargeBold hover:text-fuchsia-700 delay-200 duration-200 ease-in-out uppercase block mb-2 w-fit">Figma Prototype</Link>}
        {project.links.xdPrototype && <Link href={project.links.xdPrototype} title={project.links.xdPrototypeTitle} target="_blank" rel="noreferrer" className="text-lime-950 text-bodyLargeBold hover:text-fuchsia-700 delay-200 duration-200 ease-in-out uppercase block mb-2 w-fit">Adobe Xd Prototype</Link>}
        {project.links.site && <Link href={project.links.site} title={project.links.siteTitle} target="_blank" rel="noreferrer" className="text-lime-950 text-bodyLargeBold hover:text-fuchsia-700 delay-200 duration-200 ease-in-out uppercase block mb-2 w-fit">Project's Website</Link>}
    </div>
);

const lowercaseString = (string : string) => {
    return string.toLowerCase().replaceAll(' ', '');
};


export default function ProjectDetails() {

    const [selectedStep, setSelectedStep] = useState("");
    const projectPath = usePathname().split("/");
    const project = projects.filter((__) => __.path === projectPath[2])[0];
    const sectionIds = project.steps.map((__) => __.name);

    const stepScroll = (id: string) => {
        const section = document.querySelector(`#${id}`);
        section?.scrollIntoView( { behavior: 'smooth', block: 'start' } );
        setSelectedStep(id);
    };

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);


    return (
        <div className="px-8 py-4 sm:p-8 2xl:px-0 2xl:py-12 max-w-7xl mx-auto">
            <div className="mb-4">
                <h1 className="text-lime-700 text-h1Light">{project.title}</h1>
                <p className="text-lime-950 text-bodyLargeLight mb-4">{project.subtitle}</p>
                <span className="block text-sm text-gray-600 rounded-full bg-gray-50 py-1.5 px-3 mb-4 w-fit capitalize">{project.discipline}</span>
                <Image src={project.images.featuredImg} alt={project.images.featuredImgAlt}/>
            </div>
            <div className="md:flex">
                <div className="mb-16 basis-1/4">
                    <h3 className="text-lime-700 text-h3 mb-2">{pagesContent.projectDetails.copy.tools.h3}</h3>
                    <ul>
                        {project.tools.map((tool, i) => (
                            <li key={i} className="flex items-end mb-2">
                            <Image src={tool.icon} alt={tool.name} className="h-8 w-auto mr-2"/>
                            <p className="text-lime-950 text-body">{tool.name}</p>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="mb-16 basis-3/4">
                    <h3 className="text-lime-700 text-h3 mb-2">{pagesContent.projectDetails.copy.overview.h3}</h3>
                    <p className="text-lime-950 text-body mb-2">{project.description}</p>
                    {getCTAs(project)}
                </div>
            </div>            
            <div className="md:flex md:items-start">
                <ul className="hidden md:block md:basis-1/4 sticky top-24">
                    <li>
                        <p onClick={() => stepScroll(pagesContent.projectDetails.ids.intro)} className={`${selectedStep === pagesContent.projectDetails.ids.intro ? "text-lime-700" : "text-neutral-400"} text-bodyLargeBold hover:text-lime-700 delay-200 duration-200 ease-in-out uppercase block mb-2 w-fit cursor-pointer`}>{pagesContent.projectDetails.copy.steps.h3}</p>
                    </li>
                    {sectionIds.map((section, i) => (
                        <li key={i}>
                            <p onClick={() => stepScroll(lowercaseString(section))} className={`${selectedStep === lowercaseString(section) ? "text-lime-700" : "text-neutral-400"} text-bodyLargeBold hover:text-lime-700 delay-200 duration-200 ease-in-out uppercase block mb-2 w-fit cursor-pointer`}>{section}</p>
                        </li>
                    ))}
                    <li>
                        <p onClick={() => stepScroll(pagesContent.projectDetails.ids.learnMore)} className={`${selectedStep === pagesContent.projectDetails.ids.learnMore ? "text-lime-700" : "text-neutral-400"} text-bodyLargeBold hover:text-lime-700 delay-200 duration-200 ease-in-out uppercase block mb-2 w-fit cursor-pointer`}>{pagesContent.projectDetails.copy.ctas.h3}</p>
                    </li>
                </ul>
                <div className="md:basis-3/4">
                    <div id={pagesContent.projectDetails.ids.intro} className="mb-8 scroll-mt-24">
                        <h3 className="text-lime-700 text-h3 mb-2">{pagesContent.projectDetails.copy.steps.h3}</h3>
                        {project.intro.map((p, i) => (
                            <p key={i} className="text-lime-950 text-body">{p}</p>
                        ))}
                    </div>
                    {project.steps.map((step, i) => (
                        <div id={lowercaseString(step.name)} key={i} className="mb-8 scroll-mt-24">
                            <h3 className="text-lime-700 text-h3 mb-2">{step.name}</h3>
                            {step.description.map((p, x) => (
                                <p key={x} className="text-lime-950 text-body mb-4">{p}</p>
                            ))}
                            {step.imgs && step.imgs.map((image, j) => (
                                <Image key={j} src={image} alt={step.name}/>
                            ))}
                        </div>
                    ))}
                    <div>
                        <h3 id={pagesContent.projectDetails.ids.learnMore} className="text-lime-700 text-h3 mb-2">{pagesContent.projectDetails.copy.ctas.h3}</h3>
                        {getCTAs(project)}
                    </div>
                </div>
            </div>
        </div>
    )
}