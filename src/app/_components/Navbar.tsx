import Link from "next/link";

import { routes } from "../constants"

export default function Navbar() {
    return (
        <div>
            <ul>
                {routes.map((__, i) => (
                    <Link href={__.id} key={i}>{__.title}</Link>
                ))}
            </ul>
        </div>
    )
}