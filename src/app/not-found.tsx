// Vendor imports
"use client";
import Link from "next/link";
import { caveat } from "./fonts";
import { AnimatePresence, motion as m } from "framer-motion";

//Project imports
import { pagesContent } from "@/app/constants";
import RevealElement from "@/app/_components/RevealElement";

export default function NotFound() {

  const { copy } = pagesContent.notFound;
  return (
    <AnimatePresence mode="wait">
      <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.3, ease: 'easeInOut'}} exit={{opacity: 0}}>
        <div style={{backgroundImage: `url(/sunflower-landscape.png)`}} className="h-[80vh] bg-cover bg-center">
          <div className="bg-white/[.5] py-8 sm:px-8 2xl:py-16 h-[80vh]">
            <div className="px-8 py-4 sm:p-8 2xl:py-12 max-w-7xl mx-auto bg-white rounded drop-shadow-md flex flex-col items-center">
              <RevealElement>
                <h1 className={`${caveat.className} text-lime-950 text-h1Light lg:text-sabe text-center mb-4 sm:mb-8 2xl:mb-12`}>{copy.h1}</h1>
                <p className="text-lime-950 text-body mb-8">{copy.p}</p>
                <Link href="/" className="text-lime-950 text-bodyLarge hover:text-fuchsia-700 delay-200 duration-200 ease-in-out uppercase">{copy.cta}</Link>
              </RevealElement>
            </div>
          </div>
        </div>
      </m.div>
    </AnimatePresence>
  )
}