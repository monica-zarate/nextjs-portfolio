// Vendor imports
"use client";
import { AnimatePresence, motion as m } from "framer-motion";

// Project imports
import Intro from "./_components/Intro";
import Highlights from "./_components/Highlights";
import Testimonials from "./_components/Testimonials";
import CTA from "./_components/CTA";

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.3, ease: 'easeInOut'}} exit={{opacity: 0}}>
        <main>
          <Intro/>
          <Highlights/>
          <Testimonials/>
          <CTA/>
        </main>
      </m.div>
    </AnimatePresence>
  )
}