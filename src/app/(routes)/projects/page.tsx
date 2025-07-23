// Vendor imports
"use client";
import { AnimatePresence, motion as m } from "framer-motion";

//Project imports
import { pagesContent } from "@/app/constants";

export default function Projects() {
  const { copy } = pagesContent.projects;

  return (
    <AnimatePresence mode="wait">
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        exit={{ opacity: 0 }}
      >
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl min-h-screen">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {copy.h2}
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600 italic">
                {copy.p}
              </p>
            </div>
          </div>
        </div>
      </m.div>
    </AnimatePresence>
  );
}
