// Vendor imports
"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion as m } from "framer-motion";

// Project imports
import { social } from "../constants"


export default function Social(props: any) {

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
        <ul className="flex">
            {social.map((__, i) => (
                <m.li whileHover={!isMobile?{translateY: -2} : {}} key={__.id} className={`${i === social.length - 1 ? "" : "mr-4"} duration-75 ease-in-out`}>
                    <a href={__.url} target="__blank" rel="noreferrer">
                        <FontAwesomeIcon icon={__.icon} className="w-auto h-8" style={{color: props.isLight ? "#ffffff" : "#1A2E3A"}}/>
                    </a>
                </m.li>
            ))}
        </ul>
    )
}