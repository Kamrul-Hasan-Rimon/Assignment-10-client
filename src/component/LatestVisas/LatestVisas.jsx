import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LatestVisas = () => {
    const [showAll, setShowAll] = useState(false);
    const handleSeeAll = () => {
        setShowAll(!showAll)
    }
    const [latestVisas, setLatestVisas] = useState([])

    useEffect(() => {
        fetch('https://visa-navigator-server-lilac.vercel.app/addvisa')
            .then(res => res.json())
            .then(data => setLatestVisas(data))
    }, [])


    const displayedVisas = !showAll ? latestVisas.slice(0, 6) : latestVisas;
    return (
        <section className="py-16 bg-gradient-to-br from-gray-100 via-white to-gray-200">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                    Latest Visas
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedVisas.map((visa) => (
                        <div
                            key={visa._id}
                            className="relative bg-white rounded-xl shadow-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl"
                        >
                            <img
                                src={visa.countryImage}
                                alt={`${visa.countryName} flag`}
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-md text-sm uppercase font-semibold">
                                {visa.visaType}
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                    {visa.countryName}
                                </h3>
                                <p className="text-sm text-gray-600 mb-1">
                                    <span className="font-semibold">Processing Time:</span>{" "}
                                    {visa.processingTime}
                                </p>
                                <p className="text-sm text-gray-600 mb-1">
                                    <span className="font-semibold">Fee:</span> {visa.fee}
                                </p>
                                <p className="text-sm text-gray-600 mb-1">
                                    <span className="font-semibold">Validity:</span> {visa.validity}
                                </p>
                                <p className="text-sm text-gray-600 mb-4">
                                    <span className="font-semibold">Application Method:</span>{" "}
                                    {visa.applicationMethod}
                                </p>
                                <Link to={`/visadetails/${visa._id}`}
                                    className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white p-2 rounded-lg shadow-lg hover:opacity-90 transition-opacity font-semibold text-lg"
                                >
                                    See Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <button
                        onClick={() => handleSeeAll()}
                        className="bg-gradient-to-r from-blue-600 via-cyan-500 to-green-500 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:opacity-90 transition-opacity"
                    >
                        {showAll ? "See Less" : "See All Visas"}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LatestVisas;
