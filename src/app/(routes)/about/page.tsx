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

const linkedInData = social[0];
const emailData = social[2];

export default function About() {

    const { copy } = pagesContent.about;

    return (
        <AnimatePresence mode="wait">
            <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.3, ease: 'easeInOut'}} exit={{opacity: 0}}>
                <div style={{backgroundImage: `url(/sunflower-bg.png)`}}>
                    <div className="bg-white/[.5] py-8 sm:px-8 2xl:py-16">
                        <div className="px-8 py-4 sm:p-8 2xl:py-12 max-w-7xl mx-auto bg-white rounded drop-shadow-md">
                            <h1 className={`${caveat.className} text-lime-950 text-h1Light text-center mb-4 sm:mb-8 2xl:mb-12`}>{copy.h1}</h1>
                            <div className="flex flex-col-reverse sm:flex-row">
                                <div className="basis-1/2 max-w-sm mx-auto">
                                    <ul>
                                        {copy.p.map((paragraph, i) => (
                                            <RevealElement key={i}>
                                                <li className={i === 0 ? "" : "mt-4"}>
                                                {paragraph.map((__, i) => (   
                                                    <span key={i} className={`${__.isHighlight ? "text-fuchsia-700 text-bodyBold" : "text-lime-950 text-body"}`}>{`${__.content}${__.id === "comma" ? "" : " "}`}</span>
                                                ))}
                                                </li>
                                            </RevealElement>
                                        ))}
                                    </ul>
                                    <RevealElement>
                                        <p className="text-lime-950 text-body mt-4">{copy.ul.title}</p>
                                    </RevealElement>
                                    <ul>
                                        {copy.ul.listItems.map((p, i) => (
                                            <RevealElement key={i}>
                                                <li className="text-lime-950 text-body mt-4 flex items-center">
                                                    <FontAwesomeIcon icon={faSeedling} style={{color: '#64a30d'}}/>
                                                    <p className="ml-2">{p}</p>
                                                </li>
                                            </RevealElement>
                                        ))}
                                    </ul>
                                    <RevealElement>
                                        <h4 className="text-fuchsia-700 text-bodyBold mt-4">{copy.cta.title}</h4>
                                    </RevealElement>
                                    <ul>
                                        <RevealElement>
                                            <li className="mt-4">
                                                {copy.cta.p.slice(0,1).map((__, i) => (
                                                    <span key={i}>
                                                        <span className="text-lime-950 text-body">{__}</span>
                                                        <a href={linkedInData.url} target="_blank" title={linkedInData.title} className="text-lime-950 text-bodyLargeBold hover:text-fuchsia-700 delay-200 duration-200 ease-in-out uppercase">{` ${linkedInData.network}`}</a>
                                                    </span>
                                                ))}
                                                {copy.cta.p.slice(1,2).map((__, i) => (
                                                    <span key={i}>
                                                        <span className="text-lime-950 text-body">{` ${__} `}</span>
                                                        <a href={emailData.url} target="_blank" title={emailData.title} className="text-lime-950 text-bodyLargeBold hover:text-fuchsia-700 delay-200 duration-200 ease-in-out uppercase">{emailData.network}</a>
                                                        <span className="text-lime-950 text-body">.</span>
                                                    </span>
                                                ))}
                                            </li>
                                        </RevealElement>
                                    </ul>
                                </div>
                                <div className="basis-1/2 mb-4 md:ml-4 lg:ml-0 sm:mb-0">
                                    <RevealElement>
                                        <Image alt="monica zarate" src={monicaAboutPhoto} className="w-full h-auto max-w-sm mx-auto drop-shadow-md rounded"/>
                                    </RevealElement>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </m.div>
        </AnimatePresence>
    )
}