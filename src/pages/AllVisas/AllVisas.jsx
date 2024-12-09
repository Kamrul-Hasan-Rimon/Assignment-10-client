import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllVisas = () => {
    const [visas, setVisas] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        fetch('http://localhost:5000/addvisa')
            .then((res) => res.json())
            .then((data) => {
                setVisas(data);
                setTimeout(() => setIsLoading(false), 2000); 
            })
            .catch((error) => {
                console.error('Error fetching visas:', error);
                setError('Failed to load visas');
                setIsLoading(false); 
            });
    }, []);



    return (
        <div className="bg-gradient-to-r from-blue-50 via-white to-gray-50 min-h-screen py-16 px-8">
            {
                isLoading ? (
                    <div className="flex justify-center items-center min-h-screen">
                        <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full border-t-blue-600 border-gray-200"></div>
                    </div>
                ) : (
                    <div>
                        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">All Visas</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {visas.map((visa) => (
                                <div
                                    key={visa.id}
                                    className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between"
                                >
                                    <img
                                        src={visa.countryImage}
                                        alt={`${visa.countryName} flag`}
                                        className="w-full h-32 object-cover rounded-lg mb-4"
                                    />
                                    <h2 className="text-xl font-semibold text-gray-800">
                                        {visa.countryName}
                                    </h2>
                                    <p className="text-gray-600">
                                        Visa Type: {visa.visaType}
                                    </p>
                                    <p className="text-gray-600">
                                        Processing Time: {visa.processingTime} days
                                    </p>
                                    <p className="text-gray-600">
                                        Fee: ${visa.fee}
                                    </p>
                                    <Link
                                        to={`/visadetails/${visa._id}`}
                                        className="mt-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                                    >
                                        See Details
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default AllVisas;
