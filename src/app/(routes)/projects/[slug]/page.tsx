// Vendor imports
"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Project imports
import { projects } from "../../../constants/projects";

export default function ProjectDetails() {

    const projectPath = usePathname().split("/");
    const activeProject = projects.filter((__) => __.path === projectPath[2]);

    const [project, setProject] = useState({} as any);

    useEffect(() => {
        setProject(activeProject[0]);
        console.log(project)
    }, []);

    return (
        <div className="px-8 py-4 sm:p-8 2xl:px-0 2xl:py-12 max-w-7xl mx-auto">
            <div>
                <h1 className="text-black">{`This project is called: ${project.title}`}</h1>
            </div>
        </div>
    )
}