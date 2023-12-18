// Vendor imports
"use client";
import React, { useState, useEffect, Suspense } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion as m } from "framer-motion";

// Project imports
import { projects } from "../../../constants/projects";
import { pagesContent, routes } from "@/app/constants";
import RevealElement from "@/app/_components/RevealElement";
import Modal from "../../../_components/Modal";
import Loading from "@/app/loading";

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

                {/* Hero section */}
                <div className="overflow-hidden bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-lime-700">{project.subtitle}</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{project.title}</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                {project.description}
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {project.details?.map((feature) => (
                                <div key={feature.name} className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900">
                                    <feature.icon className="absolute left-1 top-1 h-5 w-5 text-lime-700" aria-hidden="true" />
                                    {feature.name}
                                    </dt>{' '}
                                    <dd className="inline">{feature.description}</dd>
                                </div>
                                ))}
                            </dl>
                            </div>
                        </div>
                        <Image 
                            src={project.images.featuredImg} 
                            alt={project.images.featuredImgAlt}
                            className="w-[48rem] max-w-none sm:w-[57rem] md:-ml-4 lg:-ml-0"
                            width={2432}
                            height={1442}
                        />
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="px-8 py-4 sm:p-8 2xl:px-0 2xl:py-12 max-w-7xl mx-auto">     
                    <div className="md:flex md:items-start">
                        <ul className="hidden md:block md:basis-1/4 sticky top-24">
                            <RevealElement>
                                <li onClick={() => stepScroll(ids.intro)} className={`${selectedStep === ids.intro ? "text-gray-900" : "text-gray-400"} hover:text-gray-900 mb-4 text-lg font-semibold leading-8 tracking-tight delay-200 duration-200 ease-in-out block w-fit cursor-pointer`}>{copy.steps.h3}</li>
                            </RevealElement>
                            {sectionIds.map((section, i) => (
                                <RevealElement key={i}>
                                    <li onClick={() => stepScroll(lowercaseString(section))} className={`${selectedStep === lowercaseString(section) ? "text-gray-900" : "text-gray-400"} hover:text-gray-900 mb-4 text-lg font-semibold leading-8 tracking-tight delay-200 duration-200 ease-in-out block w-fit cursor-pointer`}>{section}</li>
                                </RevealElement>
                            ))}
                            <RevealElement>
                                <li onClick={() => stepScroll(ids.learnMore)} className={`${selectedStep === ids.learnMore ? "text-gray-900" : "text-gray-400"} hover:text-gray-900 mb-4 text-lg font-semibold leading-8 tracking-tight delay-200 duration-200 ease-in-out block w-fit cursor-pointer`}>{copy.ctas.h3}</li>
                            </RevealElement>
                        </ul>
                        <div className="md:basis-3/4">
                            <div id={ids.intro} className="mb-8 scroll-mt-24">
                                <RevealElement>
                                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4 sm:mb-6">{copy.steps.h3}</h2>
                                    {project.intro.map((p, i) => (
                                        <p key={i} className="mb-4 text-base leading-7 text-gray-600">{p}</p>
                                    ))}
                                </RevealElement>
                            </div>
                            {project.steps.map((step, i) => (
                                <div id={lowercaseString(step.name)} key={i} className="mb-8 scroll-mt-24">
                                    <RevealElement>
                                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-16 sm:mt-20 mb-4 sm:mb-6">{step.name}</h2>
                                        {step.description.map((p, x) => (
                                            <p key={x} className="mb-4 text-base leading-7 text-gray-600">{p}</p>
                                        ))}
                                        {step.imgs && step.imgs.map((image, j) => (
                                            <m.div
                                                key={j} 
                                                onClick={() => setSelected(image)} 
                                                whileHover={{translateY: -2, transition: { duration: 0.2 }}} 
                                                whileTap={{scale: 0.95}}
                                                className="cursor-pointer mb-8">
                                                    <Image src={image} alt={step.name} className="shadow-md rounded-md ring-1 ring-inset ring-gray-500/10"/>  
                                            </m.div>
                                        ))}
                                    </RevealElement>
                                </div>
                            ))}
                            <div className="mb-8 scroll-mt-24">
                                <RevealElement>
                                    <h2 id={ids.learnMore} className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-16 sm:mt-20 mb-8 sm:mb-10">{copy.ctas.h3}</h2>
                                    <ul>
                                    {project.links.map((link, i) => (
                                        <li key={i} className="mb-4">
                                            <Link href={link.href} title={link.title} className="leading-6 hover:text-amber-700 text-sm font-semibold text-gray-900" target="_blank" rel="noreferrer">{link.tag}</Link>
                                        </li>
                                    ))}
                                    </ul>
                                </RevealElement>
                            </div>
                            <div className="mt-16 mb-8">
                                <RevealElement>
                                    <Link href={`/${routes[0].id}`}>
                                        <span className="text-sm font-semibold leading-6 text-gray-900 hover:text-amber-700">{`← ${cta}`}</span>
                                    </Link>
                                </RevealElement>
                            </div>
                        </div>
                    </div>

                    <Modal selected={selected} setSelected={setSelected} />

                </div>

                </Suspense>
            </m.div>
        </AnimatePresence>
    )
}