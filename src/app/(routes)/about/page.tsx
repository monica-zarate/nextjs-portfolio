// Vendor imports
"use client";
import Image from "next/image";
import { AnimatePresence, motion as m } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

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
                    <div className="bg-white py-24 sm:py-32">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto grid grid-rows-2 lg:grid-rows-none max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                                <Image
                                    src={monicaAboutPhoto}
                                    alt={copy.imgAlt}
                                    className="rounded-xl shadow-xl ring-1 ring-gray-400/10 row-start-2 lg:row-start-auto h-auto w-[30rem]"
                                />
                                <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                                    <RevealElement>
                                    <div className="lg:max-w-lg">
                                        <h2 className="text-base font-semibold leading-7 text-lime-700">{copy.h2}</h2>
                                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{copy.h3}</p>
                                        <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                        {copy.featured.map((feature, i) => (
                                        <div key={i} className="relative pl-9">
                                            <dt className={`inline ${i === copy.featured.length - 1 ? "text-gray-900 font-semibold" : "text-gray-600"}`}>
                                            <FontAwesomeIcon icon={faSeedling} className="absolute left-1 top-1 h-5 w-auto text-lime-600"/>
                                            {feature}
                                            </dt>{' '}
                                        </div>
                                        ))}
                                        </dl>
                                    </div>
                                    </RevealElement>
                                </div>
                            </div>
                        </div>
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
                        <div className="mx-auto max-w-7xl">
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