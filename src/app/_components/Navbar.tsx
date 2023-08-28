// Vendor imports
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { caveat } from "../fonts";

// Project imports
import { routes } from "../constants"
import { MobileMenu } from "./MobileMenu";
import path from "path";

export default function Navbar() {

    const [isMobile, setIsMobile] = useState(false);

    const pathname = usePathname()?.slice(1);

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
        <header className="bg-white border-b border-solid border-neutral-100 drop-shadow-md sticky top-0 z-[1]">
            <div className="flex justify-between items-center px-8 2xl:px-2 py-4 mx-auto max-w-7xl">
                <Link href="/" className={`${caveat.className} text-lime-950 text-h2`}>Monica Zarate</Link>
                {isMobile && <MobileMenu/>}
                {!isMobile && <ul>
                    {routes.map((__, i) => (
                        <Link href={__.id} key={i} className={`${pathname === __.id ? "text-fuchsia-700" : "text-lime-950"} text-bodyLargeBold ml-4 hover:text-fuchsia-700 delay-200 duration-200 ease-in-out uppercase`}>{__.title}</Link>
                    ))}
                </ul>}
            </div>
        </header>
    )
}