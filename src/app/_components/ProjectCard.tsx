// Vendor imports
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion as m } from "framer-motion";

export default function ProjectCard(props: any) {

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
        <m.div whileHover={!isMobile?{translateY: -4} : {}} className="flex flex-col bg-white border border-neutral-100 rounded drop-shadow-md duration-75 ease-in-out hover:cursor-pointer max-w-sm 2xl:max-w-full">
            <div className="">
                <Image src={props.images.thumb} alt={props.images.thumbAlt} className="" />
            </div>
            <div className="p-4 flex flex-col sm:h-[24rem] md:h-[20rem] xl:min-h-[19rem] justify-between">
                <div className="flex flex-col">
                    <h2 className="text-lime-950 text-h3 mb-2">{props.title}</h2>
                    <span className="text-sm text-gray-600 rounded-full bg-gray-50 py-1.5 px-3 mb-4 w-fit capitalize">{props.discipline}</span>
                    <p className="text-lime-950 text-body mb-8">{props.description}</p>
                </div>
                <ul className="flex">
                    {props.featuredTools.map((__: any) => (
                        <li key={__.name} className="w-9 h-9 mr-2">
                            <Image src={__.icon} alt={__.name} className="w-full"/>
                        </li>
                    ))}
                </ul>
            </div>
        </m.div>
    )
}