// Vendor imports
"use client";
import React, { useState, useEffect } from "react"
import Image from "next/image";
import { caveat } from "../fonts";

// Project imports
import { monicaProfilePhoto } from "../../assets";
import { pagesContent } from "../constants"
import Social from "./Social";

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
        <div className="bg-white py-8 px-4">
            <div className="mx-auto sm:flex max-w-5xl justify-center">
                <div className="flex justify-center items-center max-auto mb-8 sm:mb-0 lg:justify-end">
                    <Image alt="monica zarate" src={monicaProfilePhoto} className="rounded-full w-1/2 max-w-[250px] sm:w-full"/>
                    {isMobile && <h1 className={`${caveat.className} text-amber-500 text-h2 ml-2`}>{copy.h1}</h1>}
                </div>
                <div className="max-w-md sm:ml-8">
                    {!isMobile && <h1 className={`${caveat.className} text-amber-500 text-h2`}>{copy.h1}</h1>}
                    {copy.p.map((__, i) => (
                        <p key={i} className="text-body text-lime-950 mb-4">{__}</p>
                    ))}
                    <Social/>
                </div>
            </div>
        </div>
    )
}