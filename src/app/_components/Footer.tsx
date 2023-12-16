// Vendor imports
import Link from "next/link";

// Project imports
import { footerRoutes } from "../constants";
import Social from "./Social";

export default function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer className="bg-gray-50">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                <nav className="-mb-6 sm:columns-2 flex items-center sm:justify-center flex-col sm:flex-row sm:space-x-12" aria-label="Footer">
                {footerRoutes.map((route) => (
                    <div key={route.name} className="pb-6">
                    <Link href={`/${route.id}`} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {route.name}
                    </Link>
                    </div>
                ))}
                </nav>
                <div className="mt-10 flex justify-center space-x-10">
                    <Social isSmall/>
                </div>
                <p className="mt-10 text-center text-xs leading-5 text-gray-500">
                &copy; Monica Zarate {year}. All rights reserved.
                </p>
            </div>
        </footer>
    )
}