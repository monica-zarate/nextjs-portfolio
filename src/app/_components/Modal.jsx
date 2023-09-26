// Vendor imports
"use client";
import Image from "next/image";
import { motion as m } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
        <div onClick={(e) => e.stopPropagation()} className="w-full max-w-7xl mx-auto h-screen my-auto px-8 pt-28 sm:pt-32 lg:pt-24 xl:pt-20 cursor-default">
            <Image src={selected} alt="project-details"/>
            <FontAwesomeIcon icon={faXmark} style={{color: "#ffffff"}} className="absolute top-20 right-8 sm:top-24 lg:top-16 xl:top-12 cursor-pointer w-8 h-8 drop-shadow-md" onClick={() => setSelected(null)}/>
        </div>
    </m.div>
  )
}
