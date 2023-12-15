// Project imports
import { pagesContent } from "../constants";
import RevealElement from "./RevealElement";

export default function Testimonials() {

    const { copy, testimonials } = pagesContent.testimonials;
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-lime-700">{copy.h2}</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {copy.p}
                    </p>
                </div>
                <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                    <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0]">
                        {testimonials.map((testimonial) => (
                        <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                            <RevealElement>
                                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                                    <blockquote className="text-gray-900">
                                        <p>{`“${testimonial.body}”`}</p>
                                    </blockquote>
                                    <figcaption className="mt-6 flex items-center gap-x-4">
                                        <div>
                                        <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                                        <div className="text-gray-600">{testimonial.author.relationship}</div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </RevealElement>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
