import React from 'react'


export default function VisaCategories() {
    return (
        <div>
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                        Visa Categories
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Work Visas */}
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Work Visas</h3>
                            <p className="text-gray-600 mb-4">
                                Work visas are essential for individuals seeking to live and work in another country. Depending on the type of job, the visa requirements can vary. Here, you’ll find detailed information on applying for a work visa, eligibility criteria, required documents, and processing times.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Whether you're looking for skilled worker visas, corporate-sponsored visas, or self-employed work visas, this category covers all the possibilities available globally.
                            </p>
                            <button>
                                <button className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white py-2 px-6 rounded-full text-lg font-semibold">
                                    Learn More
                                </button>
                            </button>
                        </div>
                        {/* Study Visas */}
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Study Visas</h3>
                            <p className="text-gray-600 mb-4">
                                Study visas are designed for individuals who wish to pursue higher education abroad. Each country has its own unique set of requirements, including language proficiency, financial statements, and university admission letters.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Explore various student visa types like F1, J1, and Tier 4 visas. Learn how to choose the right student visa depending on your destination and course of study, and get insights into the application process, scholarship opportunities, and post-study work options.
                            </p>
                            <button>
                                <button className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 text-white py-2 px-6 rounded-full text-lg font-semibold">
                                    Learn More
                                </button>
                            </button>
                        </div>
                        {/* Tourist Visas */}
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tourist Visas</h3>
                            <p className="text-gray-600 mb-4">
                                Tourist visas allow you to visit a country for a short period for leisure or tourism purposes. Requirements typically include proof of accommodation, financial stability, and a round-trip ticket.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Whether you are planning a vacation, sightseeing, or family visit, this category includes all the visa types you’ll need to apply for. Learn about the required documents, common processing times, and special tourist visa offers like multiple-entry visas.
                            </p>
                            <button>
                                <button className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 text-white py-2 px-6 rounded-full text-lg font-semibold">
                                    Learn More
                                </button>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
