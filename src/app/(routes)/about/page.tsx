// Vendor imports
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { caveat } from "../../fonts";

//Project imports
import { monicaAboutPhoto } from "../../../assets/";
import { pagesContent, social } from "@/app/constants";

const linkedInData = social[0];
const emailData = social[2];

export default function About() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {

        window.scrollTo(0,0);

        const mobileMediaQuery = window.matchMedia("(max-width: 639px)");
        setIsMobile(mobileMediaQuery.matches);
    
        const handleMobileMediaQueryChange = (event: any) => {
            setIsMobile(event.matches)
        }
    
        mobileMediaQuery.addEventListener("change", handleMobileMediaQueryChange);
  
        return ()=> {
            mobileMediaQuery.removeEventListener("change", handleMobileMediaQueryChange);
        }
    }, []);


    return (
        <div className="p-8 max-w-7xl mx-auto">
            <h1 className={`${caveat.className} text-lime-600 text-h1Light text-center`}>{pagesContent.about.copy.h1}</h1>
            <div className="flex">
                <div className="basis-1/2 mr-4">
                    <ul>
                        {pagesContent.about.copy.p.map((paragraph, i) => (
                            <li key={i} className={i === 0 ? "" : "mt-4"}>
                            {paragraph.map((__, i) => (   
                                <span key={i} className={`${__.isHighlight ? "text-lime-700 text-bodyBold" : "text-lime-950 text-body"}`}>{`${__.content} `}</span>
                            ))}
                            </li>
                        ))}
                    </ul>
                    <p className="text-lime-950 text-body mt-4">{pagesContent.about.copy.ul.title}</p>
                    <ul>
                        {pagesContent.about.copy.ul.listItems.map((p, i) => (
                            <li key={i} className="text-lime-950 text-body mt-4">{p}</li>
                        ))}
                    </ul>
                    <h4 className="text-lime-700 text-bodyBold mt-4">{pagesContent.about.copy.cta.title}</h4>
                    <ul>
                        <li className="mt-4">
                            {pagesContent.about.copy.cta.p.slice(0,1).map((__, i) => (
                                <span key={i}>
                                    <span className="text-lime-950 text-body">{__}</span>
                                    <a href={linkedInData.url} title={linkedInData.title} className="text-lime-900 text-bodyBold hover:text-lime-700 delay-200 duration-200 ease-in-out uppercase">{` ${linkedInData.network}`}</a>
                                </span>
                            ))}
                            {pagesContent.about.copy.cta.p.slice(1,2).map((__, i) => (
                                <span key={i}>
                                    <span className="text-lime-950 text-body">{` ${__} `}</span>
                                    <a href={emailData.url} title={emailData.title} className="text-lime-900 text-bodyBold hover:text-lime-700 delay-200 duration-200 ease-in-out uppercase">{`${emailData.network}.`}</a>
                                </span>
                            ))}
                        </li>
                    </ul>
                </div>
                <div className="basis-1/2 ml-4">
                    <Image alt="monica zarate" src={monicaAboutPhoto} className="w-full h-auto"/>
                </div>
            </div>
        </div>
    )
}