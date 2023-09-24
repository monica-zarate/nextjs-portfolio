// Vendor imports
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { caveat } from "../fonts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

// Project imports
import { monicaProfilePhoto } from "../../assets";
import { pagesContent } from "../constants"
import Social from "./Social";
import RevealElement from "./RevealElement";

export default function Intro() {

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

    const { copy } = pagesContent.intro;

    return (
        <div className="bg-white p-8 pb-16 sm:px-4 w-fit mx-auto">
            <div className="mx-auto sm:flex max-w-5xl justify-center items-center">
                <RevealElement>
                    <div className="flex flex-col justify-center items-center max-auto mb-8 sm:mb-0 lg:justify-end">
                        <Image alt="monica zarate" src={monicaProfilePhoto} className="rounded-full w-1/2 max-w-[250px] sm:w-full shadow-md"/>
                        {isMobile && <h1 className={`${caveat.className} text-lime-950 text-h1Light mt-4`}>{copy.h1}</h1>}
                    </div>
                </RevealElement>
                <div className="max-w-md sm:ml-4 lg:ml-8 mx-auto">
                    {!isMobile && <h1 className={`${caveat.className} text-lime-950 text-h1Light lg:text-sabe`}>{copy.h1}</h1>}
                    <ul>
                        {copy.p.map((paragraph, i, {length}) => (
                        <RevealElement key={i}>
                            <li className={i === 0 ? "" : "mt-4"}>
                                {i + 1 === length 
                                ? 
                                paragraph.map((__) => ( 
                                    <div key={__.id} className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faSeedling} style={{color: '#64a30d'}} className="h-[18px] w-auto"/>
                                    <p className="text-lime-950 text-bodyLarge ml-2">{__.content}</p>
                                    </div>)) 
                                :
                                paragraph.map((__) => (
                                    <span key={__.id} className={`${__.isHighlight ? "text-fuchsia-700 text-bodyBold" : "text-lime-950 text-body"} mb-4`}>{`${__.content} `}</span>
                                ))
                                }
                            </li>
                        </RevealElement>
                        ))}
                    </ul>
                    <RevealElement>
                        <Social />
                    </RevealElement>
                </div>
            </div>
        </div>
    )
}