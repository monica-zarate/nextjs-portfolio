// Vendor imports
"use client";
import Image from "next/image";
import { caveat } from "../fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

// Project imports
import { laptopIllustration } from "../../assets";
import { pagesContent } from "../constants";
import Social from "./Social";
import RevealElement from "./RevealElement";

export default function Intro() {
  const { copy } = pagesContent.intro;

  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <RevealElement>
              <h1
                className={`${caveat.className} text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl`}
              >
                {copy.h1}
              </h1>
            </RevealElement>
            <ul className="mt-6">
              {copy.p.map((paragraph, i, { length }) => (
                <RevealElement key={i}>
                  <li className={i === 0 ? "" : "mt-4"}>
                    {i + 1 === length
                      ? paragraph.map((__) => (
                          <div key={__.id} className="flex items-center">
                            <FontAwesomeIcon
                              icon={faSeedling}
                              className="h-[18px] w-auto mr-2 text-lime-600"
                            />
                            <p className="text-lg font-bold leading-8 text-gray-600">
                              {__.content}
                            </p>
                          </div>
                        ))
                      : paragraph.map((__) => (
                          <span
                            key={__.id}
                            className={`${
                              __.isHighlight
                                ? "text-lime-700 font-bold"
                                : "text-gray-600"
                            } text-lg mb-4`}
                          >{`${__.content} `}</span>
                        ))}
                  </li>
                </RevealElement>
              ))}
            </ul>
            <div className="mt-6">
              <RevealElement>
                <Social />
              </RevealElement>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src={laptopIllustration}
            alt={copy.imgAlt}
          />
        </div>
      </div>
    </div>
  );
}
