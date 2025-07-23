// Vendor imports
"use client";
import { useState, Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// Project imports
import { routes } from "../constants";
import { pagesContent, social } from "../constants";
import { monicaLogo, monicaLogoLight } from "@/assets";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [logoSrc, setLogoSrc] = useState(monicaLogo);
  const { copy } = pagesContent.navbar;
  const linkedIn = social[0];
  const pathname = usePathname();

  return (
    <header className="bg-white">
      <Suspense>
        <nav
          className="mx-auto flex max-w-7xl items-end justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <Link href="/">
            <span className="sr-only">{copy.title}</span>
            <Image
              src={logoSrc}
              alt={copy.title}
              className="h-16 w-auto"
              onMouseEnter={() => setLogoSrc(monicaLogoLight)}
              onMouseLeave={() => setLogoSrc(monicaLogo)}
            />
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
          <div className="hidden lg:flex lg:gap-x-12 items-end">
            {routes.map((route) => (
              <Link
                key={route.name}
                href={`/${route.id}`}
                className={`leading-6 hover:text-amber-700 text-sm font-semibold ${
                  `/${route.id}` === pathname
                    ? "text-amber-700"
                    : "text-gray-900"
                }`}
              >
                {route.name}
              </Link>
            ))}
            <a
              href={linkedIn.url}
              target="__blank"
              rel="noreferrer"
              title={linkedIn.title}
              className="h-8"
            >
              <FontAwesomeIcon
                icon={linkedIn.icon}
                className="text-amber-700 h-8 w-auto hover:text-amber-600"
              />
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={isMobile}
          onClose={setIsMobile}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" onClick={() => setIsMobile(false)}>
                <span className="sr-only">{copy.title}</span>
                <span className="playpen text-black font-semibold text-4xl">
                  {copy.nav}
                </span>
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
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {routes.map((route) => (
                    <Link
                      key={route.name}
                      href={`/${route.id}`}
                      onClick={() => setIsMobile(false)}
                      className={`-mx-3 block px-3 py-2 text-base font-semibold leading-7 w-fit ${
                        `/${route.id}` === pathname
                          ? "text-amber-700"
                          : "text-gray-900"
                      } rounded-lg hover:bg-gray-50`}
                    >
                      {route.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href={linkedIn.url}
                    target="__blank"
                    rel="noreferrer"
                    title={linkedIn.title}
                  >
                    <FontAwesomeIcon
                      icon={linkedIn.icon}
                      className="text-amber-700 h-8 w-auto hover:text-amber-600"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </Suspense>
    </header>
  );
}
