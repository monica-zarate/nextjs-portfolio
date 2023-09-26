// Vendor imports
"use client";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { caveat } from "../fonts";

// Project imports
import { routes } from "../constants";
import { MobileMenu } from "./MobileMenu";
import { sunflower } from "@/assets";
import { pagesContent } from "../constants";


export default function Navbar() {

    const [isMobile, setIsMobile] = useState(false);

    const pathname = usePathname()?.slice(1);

    const { copy } = pagesContent.navbar;

    useEffect(() => {

        window.scrollTo(0,0);

        const mobileMediaQuery = window.matchMedia("(max-width: 639px)");
        setIsMobile(mobileMediaQuery.matches);
    
        const handleMobileMediaQueryChange = (event: any) => {
            setIsMobile(event.matches)
        }
    
        mobileMediaQuery.addEventListener("change", handleMobileMediaQueryChange);
  
        return ()=> {
            mobileMediaQuery.removeEventListener("change", handleMobileMediaQueryChange);
        }
    }, []);


    return (
        <header className="bg-white border-b border-solid border-neutral-100 drop-shadow sticky top-0 z-[1]">
            <Suspense>
                <div className="flex justify-between items-center px-8 2xl:px-2 py-4 mx-auto max-w-7xl">
                    <Link href="/" className="flex items-center z-[5]">
                        <Image src={sunflower} alt="sunflower icon" className="w-8 sm:w-10 h-8 sm:h-10 drop-shadow-md"/>
                        <span className={`${caveat.className} text-lime-950 text-h2 sm:text-h1Light`}>{copy.title}</span>
                    </Link>
                    {isMobile && <MobileMenu/>}
                    {!isMobile && <ul className="flex">
                        <li key={routes[0].id}>
                            <Link href={`/${routes[0].id}`} className={`${pathname === routes[0].id ? "text-fuchsia-700" : "text-lime-950"} text-bodyBold ml-4 hover:text-fuchsia-700 delay-200 duration-200 ease-in-out uppercase`}>{routes[0].title}</Link>
                        </li>
                        <li key={routes[1].id}>
                            <Link href={`/${routes[1].id}`} className={`${pathname === routes[1].id ? "text-fuchsia-700" : "text-lime-950"} text-bodyBold ml-4 hover:text-fuchsia-700 delay-200 duration-200 ease-in-out uppercase`}>{routes[1].title}</Link>
                        </li>
                    </ul>}
                </div>
            </Suspense>
        </header>
    )
}