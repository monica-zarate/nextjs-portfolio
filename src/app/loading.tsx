// Vendor imports
"use client";
import Image from "next/image";
import { AnimatePresence, motion as m } from "framer-motion";

// Project imports
import { sunflower } from "../assets";

export default function Loading() {
  return (
    <AnimatePresence mode="wait">
        <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.3, ease: 'easeInOut'}} exit={{opacity: 0}}>
            <div className="bg-white flex flex-col items-center justify-center w-full h-full pt-48 py-96">
                <Image src={sunflower} alt="sunflower icon" className="w-40 h-40"/>
            </div>  
        </m.div>
    </AnimatePresence>
  );
}