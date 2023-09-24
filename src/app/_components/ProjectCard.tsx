// Vendor imports
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion as m } from "framer-motion";

// Project imports
import RevealElement from "./RevealElement";
import { disciplines, pagesContent } from "../constants";

export default function ProjectCard(props: any) {

    const [isMobile, setIsMobile] = useState(false);

    const { copy } = pagesContent.projectCard;

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
        <RevealElement>
            <m.div whileHover={!isMobile?{translateY: -4} : {}} className="flex flex-col bg-white border border-neutral-100 rounded drop-shadow-md duration-75 ease-in-out hover:cursor-pointer max-w-sm 2xl:max-w-full">
                <div className="">
                    <Image src={props.images.thumb} alt={props.images.thumbAlt} className="" />
                </div>
                <div className="p-4 flex flex-col justify-between">
                    <div className="flex flex-col">
                        <h2 className="text-lime-950 text-h3 mb-2">{props.title}</h2>
                        <span className={`${props.discipline === disciplines.design ? "text-fuchsia-700 bg-fuchsia-50 ring-fuchsia-700/10" : "text-lime-700 bg-lime-50 ring-lime-700/10"} inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset mb-4 w-fit capitalize`}>{props.discipline}</span>
                        <p className="text-lime-950 text-body mb-8">{props.description}</p>
                    </div>
                    <div>
                        <span className="text-gray-500 text-xs mb-2 block">{copy.span}</span>
                        <ul className="flex">
                        {props.tools.map((__: any) => (
                            <li key={__.name} className="w-9 h-9 mr-2 flex items-center justify-center">
                                <Image src={__.icon} alt={__.name} className="w-full"/>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </m.div>
        </RevealElement>
    )
}