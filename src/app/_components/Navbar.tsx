// Vendor imports
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { caveat } from "../fonts";

// Project imports
import { routes } from "../constants"
import { MobileMenu } from "./MobileMenu";


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
                {!isMobile && <ul className="flex">
                    <li key={routes[0].id}>
                        <Link href="/projects" className={`${pathname === routes[0].id ? "text-fuchsia-700" : "text-lime-950"} text-bodyLargeBold ml-4 hover:text-fuchsia-700 delay-200 duration-200 ease-in-out uppercase`}>{routes[0].title}</Link>
                    </li>
                    <li key={routes[1].id}>
                        <Link href="/about" className={`${pathname === routes[1].id ? "text-fuchsia-700" : "text-lime-950"} text-bodyLargeBold ml-4 hover:text-fuchsia-700 delay-200 duration-200 ease-in-out uppercase`}>{routes[1].title}</Link>
                    </li>
                </ul>}
            </div>
        </header>
    )
}