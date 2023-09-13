// Vendor imports
"use client";
import { AnimatePresence, motion as m } from "framer-motion";

// Project imports
import Intro from "./_components/Intro";
import Featured from "./_components/Featured";

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.3, ease: 'easeInOut'}} exit={{opacity: 0}}>
        <main>
        <Intro/>
        <Featured/>
        </main>
      </m.div>
    </AnimatePresence>
  )
}