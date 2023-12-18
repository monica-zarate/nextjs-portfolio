// Vendor imports
import Link from "next/link";

// Project imports
import { pagesContent } from "../constants";
import RevealElement from "./RevealElement";

export default function CTA() {

    const { copy } = pagesContent.cta;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <RevealElement>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {copy.h2}
            <br />
            {copy.h22}
            </h2>
            <div className="mt-10 flex items-center gap-x-6">
            <Link
                href={copy.mainHref}
                className="rounded-md bg-amber-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
            >
                {copy.main}
            </Link>
            <Link href={copy.secondaryHref} className="text-sm font-semibold leading-6 text-gray-900 hover:text-amber-700">
                {copy.secondary} <span aria-hidden="true">→</span>
            </Link>
            </div>
        </RevealElement>
      </div>
    </div>
  )
}