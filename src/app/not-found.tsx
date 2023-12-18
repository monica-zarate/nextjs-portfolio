// Vendor imports
"use client";
import Image from "next/image";
import Link from "next/link";

//Project imports
import { pagesContent } from "@/app/constants";
import RevealElement from "@/app/_components/RevealElement";

//Project imports
import { sunflowerBG } from "../assets/";

export default function NotFound() {

  const { copy } = pagesContent.notFound;

  return (
      <main className="relative isolate min-h-full">
        <Image
          src={sunflowerBG}
          alt={copy.imgAlt}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 h-full w-full object-cover object-center bg-gray-900/20"/>
        <RevealElement>
          <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">{copy.h1}</h1>
            <p className="mt-4 text-base text-white/70 sm:mt-6">{copy.p}</p>
            <div className="mt-10 flex justify-center">
              <Link href="/" className="text-sm font-semibold leading-7 text-white">
                <span aria-hidden="true">&larr;</span> Back to home
              </Link>
            </div>
          </div>
        </RevealElement>
      </main>
  )
}