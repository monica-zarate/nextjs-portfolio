// Vendor imports
"use client";
import { caveat } from "../../fonts";

//Project imports
import { pagesContent } from "@/app/constants";

export default function Projects() {
    return (
        <div className="px-8 py-4 sm:p-8 max-w-7xl mx-auto">
            <h1 className={`${caveat.className} text-lime-950 text-h1Light text-center mb-4 sm:mb-8`}>{pagesContent.projects.copy.h1}</h1>
        </div>
    )
}