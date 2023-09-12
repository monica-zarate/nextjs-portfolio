// Vendor imports
"use client";
import Image from "next/image";
import { motion as m } from "framer-motion";

export default function Modal({selected, setSelected}) {
    if(!selected){
        return <></>;
    }

  return (
    <m.div
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: { duration: 0.5 }}}
    onClick={() => setSelected(null)}
    className="fixed inset-0 bg-black/50 z-50 cursor-pointer overflow-y-scroll">
        <div onClick={(e) => e.stopPropagation()} className="w-full 2xl:px-0 max-w-7xl mx-auto my-24 px-8 cursor-default">
            <Image src={selected} alt="project-details"/>
        </div>
    </m.div>
  )
}
