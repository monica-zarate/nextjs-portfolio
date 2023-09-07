// Vendor imports
"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Project imports
import { projects } from "../../../constants/projects";
import { pagesContent } from "@/app/constants";


const getCTAs = (project: any) => (
    <div>
        {project.links.repo && <Link href={project.links.repo} title={project.links.repoTitle} target="_blank" rel="noreferrer" className="text-lime-950">GitHub Repository</Link>}
        {project.links.figmaPrototype && <Link href={project.links.figmaPrototype} title={project.links.figmaPrototypeTitle} target="_blank" rel="noreferrer" className="text-lime-950">Figma Prototype</Link>}
        {project.links.xdPrototype && <Link href={project.links.xdPrototype} title={project.links.xdPrototypeTitle} target="_blank" rel="noreferrer" className="text-lime-950">Adobe Xd Prototype</Link>}
        {project.links.site && <Link href={project.links.site} title={project.links.siteTitle} target="_blank" rel="noreferrer" className="text-lime-950">Project's Website</Link>}
    </div>
);

export default function ProjectDetails() {

    const projectPath = usePathname().split("/");
    const project = projects.filter((__) => __.path === projectPath[2])[0];

    return (
        <div className="px-8 py-4 sm:p-8 2xl:px-0 2xl:py-12 max-w-7xl mx-auto">
            <div>
                <h1 className="text-lime-950 text-h1Light mb-4">{project.title}</h1>
                <Image src={project.images.featuredImg} alt={project.images.featuredImgAlt} className="mb-4"/>
            </div>
            <div>
                <h3 className="text-lime-950 text-h3 mb-2">{project.subtitle}</h3>
                <span className="block text-sm text-gray-600 rounded-full bg-gray-50 py-1.5 px-3 mb-4 w-fit capitalize">{project.discipline}</span>
                {getCTAs(project)}
                <h2 className="text-lime-950">{pagesContent.projectDetails.copy.overview.h2}</h2>
                <p className="text-lime-950">{project.description}</p>
                <div>
                    <h2 className="text-lime-950">{pagesContent.projectDetails.copy.tools.h2}</h2>
                    <ul>
                        {project.tools.map((tool, i) => (
                            <li key={i}>
                            <Image src={tool.icon} alt={tool.name} />
                            <p className="text-lime-950">{tool.name}</p>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <h2 className="text-lime-950">{pagesContent.projectDetails.copy.steps.h2}</h2>
                {project.intro.map((p, i) => (
                    <p key={i} className="text-lime-950">{p}</p>
                ))}
                <div>
                    {project.steps.map((step, i) => (
                        <div key={i}>
                            <h3 className="text-lime-950">{step.name}</h3>
                            {step.description.map((p, x) => (
                                <p key={x} className="text-lime-950">{p}</p>
                            ))}
                            {step.imgs && step.imgs.map((image, j) => (
                                <Image key={j} src={image} alt={step.name}/>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            {getCTAs(project)}
        </div>
    )
}