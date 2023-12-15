// Vendor imports
"use client";
import Image from "next/image";
import { caveat } from "../../fonts";
import { AnimatePresence, motion as m } from "framer-motion";

//Project imports
import { monicaAboutPhoto, sunflowerBG } from "../../../assets/";
import { pagesContent } from "@/app/constants";
import RevealElement from "@/app/_components/RevealElement";
import Social from "@/app/_components/Social";


export default function About() {

    const { copy } = pagesContent.about;
    const { acknowledgement } = pagesContent.footer;


    return (
        <AnimatePresence mode="wait">
            <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.3, ease: 'easeInOut'}} exit={{opacity: 0}}>
                <main className="isolate">
                    {/* Hero section */}
                    <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-lime-100/20">
                        <div
                            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-lime-600/10 ring-1 ring-lime-50 sm:-mr-80 lg:-mr-96"
                            aria-hidden="true"
                        />
                        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                            <RevealElement>
                                <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                                <h1 className={`${caveat.className} max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto`}>
                                    {copy.h1}
                                </h1>
                                <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                                    <p className="text-lg leading-8 text-gray-600">
                                    {copy.p}
                                    </p>
                                </div>
                                <Image
                                    src={monicaAboutPhoto}
                                    alt={copy.imgAlt}
                                    className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2"
                                />
                                </div>
                        </RevealElement>
                        </div>
                    <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
                    </div>

                    {/* Work timeline section */}
                    <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
                        <RevealElement>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{copy.workTimeline.heading}</h2>
                            <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                {copy.workTimeline.events.map((role) => (
                                    <div key={role.title}>
                                        <time
                                        dateTime={role.date}
                                        className="flex items-center text-sm font-semibold leading-6 text-lime-700"
                                        >
                                        <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                                            <circle cx={2} cy={2} r={2} fill="currentColor" />
                                        </svg>
                                        {role.date}
                                        <div
                                            className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                                            aria-hidden="true"
                                        />
                                        </time>
                                        <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{role.title}</p>
                                        <p className="mt-6 text-sm font-semibold leading-8 tracking-tight text-gray-700">{role.company}</p>
                                        <p className="mt-1 text-base leading-7 text-gray-600">{role.description}</p>
                                    </div>
                                ))}
                            </div>
                        </RevealElement>
                    </div>

                    {/* Skills section */}
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-32">
                        <RevealElement>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{copy.skills.h2}</h2>
                        <ul className="mx-auto mt-6 lg:mx-0 lg:max-w-none flex flex-wrap">
                            {copy.skills.list.map((item, i) => (
                                <RevealElement key={i}>
                                    <li className="">
                                        <span className="text-lime-700 bg-lime-50 ring-lime-700/10 inline-flex items-center rounded-md px-2 py-1 text-sm font-medium ring-1 ring-inset mb-2 mr-2 w-fit capitalize">{item}</span>
                                    </li>
                                </RevealElement>
                            ))}
                        </ul>
                        </RevealElement>
                    </div>

                    {/* Education timeline section */}
                    <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
                        <RevealElement>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{copy.educationTimeline.heading}</h2>
                        <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            {copy.educationTimeline.events.map((item) => (
                            <div key={item.name}>
                                <time
                                dateTime={item.date}
                                className="flex items-center text-sm font-semibold leading-6 text-lime-700"
                                >
                                <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                                </svg>
                                {item.date}
                                <div
                                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                                    aria-hidden="true"
                                />
                                </time>
                                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.name}</p>
                                <p className="mt-6 text-sm font-semibold leading-8 tracking-tight text-gray-700">{item.institution}</p>
                                <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
                            </div>
                            ))}
                        </div>
                        </RevealElement>
                    </div>



                    {/* Image section */}
                    <div className="mt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
                        <RevealElement>
                            <Image
                                src={sunflowerBG}
                                alt={copy.bgAlt}
                                className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
                            />
                        </RevealElement>
                    </div>

                    {/* {Hobbies section} */}
                    <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <RevealElement>
                            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                {copy.hobbies.h2}
                            </h2>
                            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
                                {copy.hobbies.hobbiesList.map((feature) => (
                                <div key={feature.name}>
                                    <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-lime-50 ring-lime-700/10 ring-1 ring-inset">
                                        <feature.icon className="h-6 w-6 text-lime-700" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                    </dt>
                                    <dd className="mt-1 text-base leading-7 text-gray-600">{feature.description}</dd>
                                </div>
                                ))}
                            </dl>
                            </div>
                            </RevealElement>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-white">
                        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                            <RevealElement>
                                <h2 className="text-3xl font-bold tracking-tight text-lime-700 sm:text-4xl">
                                {copy.cta.h2}
                                </h2>
                                <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                                    {copy.cta.p}
                                </p>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <Social/>
                                </div>
                            </RevealElement>
                        </div>
                    </div>

                    {/* Land Acknowledgement */}
                    <div className="bg-white">
                        <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-8">
                            <RevealElement>
                                <p className="text-base leading-7 text-gray-500">{acknowledgement.p}</p>
                            </RevealElement>
                        </div>
                    </div>
                </main>
            </m.div>
        </AnimatePresence>
    )
}