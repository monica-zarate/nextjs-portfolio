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
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between">
                            <div className="basis-2/3 sm:mr-4">
                                <span className={`${caveat.className} text-lime-950 text-h1Light lg:text-sabe mb-4 block`}>{copy.intro.heading}</span>
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
                                    <Image alt="monica zarate" src={monicaAboutPhoto} className="w-full h-auto max-w-lg mx-auto drop-shadow-md rounded-lg"/>
                                </RevealElement>
                            </div>
                        </div>
                        <div className="mt-16 sm:flex sm:items-start sm:justify-between">
                            <div className="sm:basis-1/2 sm:pr-2">
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
                            <div className="mt-8 sm:mt-0 sm:basis-1/2">
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
                        </div>
                        <div className="mt-16">
                            <span className="text-lime-950 text-h2 mb-4 sm:mb-4 block">{copy.timeline.heading}</span>
                            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                {copy.timeline.events.map((item) => (
                                    <RevealElement key={item.id}>
                                    <div>
                                        <time
                                        dateTime={item.date}
                                        className="flex items-center text-base font-semibold leading-6 text-lime-700"
                                        >
                                        <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                                            <circle cx={2} cy={2} r={2} fill="currentColor" />
                                        </svg>
                                        {item.date}
                                        <div
                                            className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                                            aria-hidden="true"
                                        />
                                        </time>
                                        <p className="ml-5 mt-6 text-base font-semibold leading-6 text-lime-950">{item.institution}</p>
                                        <p className="ml-5 mt-2 text-bodyLarge leading-8 tracking-tight text-fuchsia-700">{item.name}</p>
                                        <p className="ml-5 mt-2 text-body leading-7 text-lime-950">{item.description}</p>
                                    </div>
                                </RevealElement>
                                ))}
                            </div>
                        </div>
                        <RevealElement>
                            <div className="mt-16 w-full h-48 lg:h-64 rounded-lg bg-center bg-cover drop-shadow-md" style={{backgroundImage: `url(/sunflower-landscape.png)`}}>
                            </div>
                        </RevealElement>
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