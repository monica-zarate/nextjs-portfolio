// Vendor imports
"use client";
import Image from "next/image";

export default function ProjectCard(props: any) {
    return (
        <div className="grid max-w-3xl bg-white border border-neutral-100 rounded drop-shadow-md mb-8">
            <div className="">
                <Image src={props.images.thumb} alt={props.images.thumbAlt} className="" />
            </div>
            <div className="p-4">
                <h2 className="text-lime-950">{props.title}</h2>
                <span className="text-lime-950">{props.discipline}</span>
                <p className="text-lime-950">{props.description}</p>
                <ul>
                    {props.featuredTools.map((__: any) => (
                        <li key={__.name}>
                            <Image src={__.icon} alt={__.name} className="h-6 w-auto" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}