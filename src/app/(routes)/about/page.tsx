// Vendor imports
"use client";
import Image from "next/image";
import { caveat } from "../../fonts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion as m } from "framer-motion";

//Project imports
import { monicaAboutPhoto } from "../../../assets/";
import { pagesContent, social } from "@/app/constants";
import RevealElement from "@/app/_components/RevealElement";

const linkedInData = social[1];
const emailData = social[3];

export default function About() {

    const { copy } = pagesContent.about;

    return (
        <AnimatePresence mode="wait">
            <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.3, ease: 'easeInOut'}} exit={{opacity: 0}}>
                <div className="bg-white p-8 pb-16 w-fit mx-auto"> 
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between">
                            <div className="basis-2/3 max-w-sm sm:mr-4">
                                <span className={`${caveat.className} text-lime-950 text-h1Light mb-4 sm:mb-8 2xl:mb-12 block`}>{copy.intro.heading}</span>
                                <ul>
                                    {copy.intro.p.map((paragraph, i) => (
                                        <RevealElement key={i}>
                                            <li className={i === 0 ? "" : "mt-4"}>
                                            {paragraph.map((__, i) => (   
                                                <span key={i} className={`${__.isHighlight ? "text-fuchsia-700 text-bodyBold" : "text-lime-950 text-body"}`}>{`${__.content} `}</span>
                                            ))}
                                            </li>
                                        </RevealElement>
                                    ))}
                                </ul>
                            </div>
                            <div className="basis-1/3 mb-4 md:ml-4 lg:ml-0 sm:mb-0">
                                <RevealElement>
                                    <Image alt="monica zarate" src={monicaAboutPhoto} className="w-full h-auto max-w-lg mx-auto drop-shadow-md rounded"/>
                                </RevealElement>
                            </div>
                        </div>
                        <div className="mt-16 md:w-3/4">
                            <span className="text-lime-950 text-h2 mb-4 sm:mb-4 block">{copy.development.heading}</span>
                            <ul className="flex flex-wrap">
                                    {copy.development.skillsList.map((li, i) => (
                                        <RevealElement key={i}>
                                            <li className="">
                                                <span className="text-lime-700 bg-lime-50 ring-lime-700/10 inline-flex items-center rounded-md px-2 py-1 text-sm font-medium ring-1 ring-inset mb-2 mr-2 w-fit capitalize">{`${li.name} `}</span>
                                            </li>
                                        </RevealElement>
                                    ))}
                                </ul>
                        </div>
                        <div className="mt-8 md:w-3/4">
                            <span className="text-lime-950 text-h2 mb-4 sm:mb-4 block">{copy.design.heading}</span>
                            <ul className="flex flex-wrap">
                                    {copy.design.skillsList.map((li, i) => (
                                        <RevealElement key={i}>
                                            <li className="">
                                                <span className="text-fuchsia-700 bg-fuchsia-50 ring-fuchsia-700/10 inline-flex items-center rounded-md px-2 py-1 text-sm font-medium ring-1 ring-inset mb-2 mr-2 w-fit capitalize">{`${li.name} `}</span>
                                            </li>
                                        </RevealElement>
                                    ))}
                                </ul>
                        </div>
                        <div className="mt-16 md:w-3/4">
                            <RevealElement>
                            <span className="text-lime-950 text-h4 mb-4 sm:mb-4 block">{copy.hobbies.heading}</span>
                            </RevealElement>
                            <ul>
                                {copy.hobbies.hobbiesList.map((li, i) => (
                                    <RevealElement key={i}>
                                        <li className="text-lime-950 text-body mt-4 flex items-center">
                                            <FontAwesomeIcon icon={faSeedling} style={{color: '#64a30d'}}/>
                                            <p className="ml-2">{li}</p>
                                        </li>
                                    </RevealElement>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-16">
                            <RevealElement>
                            <span className="text-lime-950 text-h4 mb-4 sm:mb-4 block">{copy.cta.heading}</span>
                            </RevealElement>
                            <ul>
                                <RevealElement>
                                    <li className="mt-4">
                                        {copy.cta.p.slice(0,1).map((__, i) => (
                                            <span key={i}>
                                                <span className="text-lime-950 text-body">{__}</span>
                                                <a href={linkedInData.url} target="_blank" title={linkedInData.title} className="text-lime-950 text-bodyBold hover:text-fuchsia-700 delay-200 duration-200 ease-in-out uppercase">{` ${linkedInData.network}`}</a>
                                            </span>
                                        ))}
                                        {copy.cta.p.slice(1,2).map((__, i) => (
                                            <span key={i}>
                                                <span className="text-lime-950 text-body">{` ${__} `}</span>
                                                <a href={emailData.url} target="_blank" title={emailData.title} className="text-lime-950 text-bodyBold hover:text-fuchsia-700 delay-200 duration-200 ease-in-out uppercase">{emailData.network}</a>
                                                <span className="text-lime-950 text-body">.</span>
                                            </span>
                                        ))}
                                    </li>
                                </RevealElement>
                            </ul>
                        </div>
                    </div>
                </div>
            </m.div>
        </AnimatePresence>
    )
}