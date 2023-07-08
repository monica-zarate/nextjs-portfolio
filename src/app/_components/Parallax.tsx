"use client";
import { motion as m, useScroll, useTransform } from "framer-motion"
import React, { useRef } from "react"
import { caveat } from "../fonts";

export default function Parallax() {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

    return (
        <div ref={ref} className="w-full h-screen overflow-hidden relative">
            <m.div className="absolute inset-0 z-[0]" style={{
                backgroundImage: `url(/bg.png)`,
                backgroundPosition: 'top',
                backgroundSize: 'cover',
                y: backgroundY,
            }}></m.div>
            <div className="absolute inset-0 z-[10]" style={{
                backgroundImage: `url(/fg.png)`,
                backgroundPosition: 'top',
                backgroundSize: 'cover'
            }}></div>
            <div className="absolute inset-0 z-[4] bg-sky-500/50"></div>
            <m.div style={{y: textY}} className={`${caveat.className} absolute inset-0 grid place-items-center z-[5] text-white h-1/6 mt-40`}>
                <h2 className="text-h3 relative z-[30]">Hola!</h2>
                <h1 className={`text-h1 relative z-[30]`}>I'm Monica Zarate</h1>
                <h3 className="text-h3 relative z-[30]">Web Designer and Developer</h3>
            </m.div>
        </div>
    )
}