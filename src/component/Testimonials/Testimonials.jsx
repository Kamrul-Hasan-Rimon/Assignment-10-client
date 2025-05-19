import React from 'react'

export default function Testimonials() {
    return (
        <div>
            <section className="py-16 bg-gradient-to-br from-gray-200 via-white to-gray-200">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-12 tracking-tight">
                        What Our Users Are Saying
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-center  gap-12">
                        {/* Testimonial 1 */}
                        <div className="w-full sm:w-80 bg-white rounded-xl shadow-xl p-8 text-center transform transition-transform hover:scale-105 hover:shadow-2xl">
                            <div className="relative mb-6">
                                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 opacity-30 rounded-full"></div>
                                <img
                                    src="https://c8.alamy.com/comp/H6HYG8/adorable-boy-isolated-on-a-white-background-H6HYG8.jpg"
                                    alt="John Doe"
                                    className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-white shadow-xl"
                                />
                            </div>
                            <p className="text-lg text-gray-600 mb-6 font-serif italic">
                                "Visa Navigator made my visa application process so smooth and hassle-free! The website is easy to use, and the visa details were very helpful. The process was clear from start to finish."
                            </p>
                            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
                            <p className="text-sm text-gray-500">Software Engineer</p>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="w-full sm:w-80 bg-white rounded-xl shadow-xl p-8 text-center transform transition-transform hover:scale-105 hover:shadow-2xl">
                            <div className="relative mb-6">
                                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 opacity-30 rounded-full"></div>
                                <img
                                    src="data:image/jpeg;base64,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"
                                    alt="Jane Smith"
                                    className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-white shadow-xl"
                                />
                            </div>
                            <p className="text-lg text-gray-600 mb-6 font-serif italic">
                                "Thanks to Visa Navigator, I was able to apply for a student visa and get accepted into my dream university! The step-by-step guidance was invaluable. It made filling out the forms so much easier."
                            </p>
                            <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
                            <p className="text-sm text-gray-500">Graduate Student</p>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="w-full sm:w-80 bg-white rounded-xl shadow-xl p-8 text-center transform transition-transform hover:scale-105 hover:shadow-2xl">
                            <div className="relative mb-6">
                                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 opacity-30 rounded-full"></div>
                                <img
                                    src="data:image/webp;base64,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"
                                    alt="David Lee"
                                    className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-white shadow-xl"
                                />
                            </div>
                            <p className="text-lg text-gray-600 mb-6 font-serif italic">
                                "Visa Navigator provided all the details I needed to apply for a tourist visa. The process was much quicker than I anticipated! I was able to get my visa approval in just a few weeks."
                            </p>
                            <h3 className="text-xl font-semibold text-gray-800">David Lee</h3>
                            <p className="text-sm text-gray-500">Travel Blogger</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
