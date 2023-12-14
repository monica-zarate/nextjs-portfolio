// Vendor imports
"use client";
import { useState, Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// Project imports
import { routes } from "../constants";
import { sunflower } from "@/assets";
import { pagesContent } from "../constants";

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const { copy } = pagesContent.navbar;
    const pathname = usePathname();

    
    return (
        <header className="bg-white">
            <Suspense>
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <Link href="/">
                        <span className="sr-only">{copy.title}</span>
                        <Image className="h-12 w-auto" src={sunflower} alt="sunflower icon" />
                    </Link>
                    <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setIsMobile(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12 items-center">
                    {routes.map((route) => (
                        <Link key={route.name} href={`/${route.id}`} className={`${route.name === routes[routes.length - 1].name ? "rounded-md bg-amber-700 px-3 py-2 text-white shadow-sm hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600" : "leading-6 hover:text-amber-700"} text-sm font-semibold ${`/${route.id}` === pathname ? "text-amber-700" : "text-gray-900"}`}>
                        {route.name}
                        </Link>
                    ))}
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={isMobile} onClose={setIsMobile}>
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" onClick={() => setIsMobile(false)}>
                            <span className="sr-only">{copy.title}</span>
                            <Image
                                className="h-12 w-auto"
                                src={sunflower}
                                alt="sunflower icon"
                            />
                        </Link>
                        <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        onClick={() => setIsMobile(false)}
                        >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="space-y-2 py-6">
                            {routes.map((route) => (
                            <Link
                                key={route.name}
                                href={`/${route.id}`}
                                onClick={() => setIsMobile(false)}
                                className={`-mx-3 block px-3 py-2 text-base font-semibold leading-7 w-fit ${`/${route.id}` === pathname ? "text-amber-700" : "text-gray-900"} ${route.name === routes[routes.length - 1].name ? "rounded-md bg-amber-700 px-3 py-2 text-sm text-white shadow-sm hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600" : "rounded-lg hover:bg-gray-50"}`}
                            >
                                {route.name}
                            </Link>
                            ))}
                        </div>
                    </div>
                    </Dialog.Panel>
                </Dialog>
            </Suspense>
        </header>
    )
}