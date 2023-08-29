// Vendor imports
"use client";
import Image from "next/image";
import { caveat } from "../../fonts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

//Project imports
import { monicaAboutPhoto } from "../../../assets/";
import { pagesContent, social } from "@/app/constants";

const linkedInData = social[0];
const emailData = social[2];

export default function About() {

    return (
        <div className="h-screen" style={{backgroundImage: `url(/sunflower-bg.png)`}}>
            <div className="w-full h-full bg-white/[.5]">
                <div className="px-8 py-4 sm:p-8 2xl:py-12 max-w-7xl mx-auto bg-white h-screen">
                    <h1 className={`${caveat.className} text-lime-950 text-h1Light text-center mb-4 sm:mb-8 2xl:mb-12`}>{pagesContent.about.copy.h1}</h1>
                    <div className="flex flex-col-reverse sm:flex-row">
                        <div className="basis-1/2 max-w-sm mx-auto">
                            <ul>
                                {pagesContent.about.copy.p.map((paragraph, i) => (
                                    <li key={i} className={i === 0 ? "" : "mt-4"}>
                                    {paragraph.map((__, i) => (   
                                        <span key={i} className={`${__.isHighlight ? "text-fuchsia-700 text-bodyBold" : "text-lime-950 text-body"}`}>{`${__.content}${__.id === "comma" ? "" : " "}`}</span>
                                    ))}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-lime-950 text-body mt-4">{pagesContent.about.copy.ul.title}</p>
                            <ul>
                                {pagesContent.about.copy.ul.listItems.map((p, i) => (
                                    <li key={i} className="text-lime-950 text-body mt-4 flex items-center">
                                        <FontAwesomeIcon icon={faSeedling} style={{color: '#64a30d'}}/>
                                        <p className="ml-2">{p}</p>
                                    </li>
                                ))}
                            </ul>
                            <h4 className="text-fuchsia-700 text-bodyBold mt-4">{pagesContent.about.copy.cta.title}</h4>
                            <ul>
                                <li className="mt-4">
                                    {pagesContent.about.copy.cta.p.slice(0,1).map((__, i) => (
                                        <span key={i}>
                                            <span className="text-lime-950 text-body">{__}</span>
                                            <a href={linkedInData.url} target="_blank" title={linkedInData.title} className="text-lime-950 text-bodyLargeBold hover:text-fuchsia-700 delay-200 duration-200 ease-in-out uppercase">{` ${linkedInData.network}`}</a>
                                        </span>
                                    ))}
                                    {pagesContent.about.copy.cta.p.slice(1,2).map((__, i) => (
                                        <span key={i}>
                                            <span className="text-lime-950 text-body">{` ${__} `}</span>
                                            <a href={emailData.url} target="_blank" title={emailData.title} className="text-lime-950 text-bodyLargeBold hover:text-fuchsia-700 delay-200 duration-200 ease-in-out uppercase">{emailData.network}</a>
                                            <span className="text-lime-950 text-body">.</span>
                                        </span>
                                    ))}
                                </li>
                            </ul>
                        </div>
                        <div className="basis-1/2 mb-4 md:ml-4 lg:ml-0 sm:mb-0">
                            <Image alt="monica zarate" src={monicaAboutPhoto} className="w-full h-auto max-w-sm mx-auto"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}