import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyApplications = () => {
  const loaderData = useLoaderData();
  const [applications, setApplications] = useState(loaderData);
  const [filteredApplications, setFilteredApplications] = useState(loaderData); 
  const [searchTerm, setSearchTerm] = useState(''); 
  const [isCanceling, setIsCanceling] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const filtered = applications.filter((app) =>
      app.countryName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredApplications(filtered);
  }, [searchTerm, applications]);

  const handleCancel = async (id) => {
    setIsCanceling(true);
    try {
      const response = await fetch(`https://visa-navigator-server-lilac.vercel.app/applyVisa/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setApplications(applications.filter((app) => app._id !== id));
        setFilteredApplications(filteredApplications.filter((app) => app._id !== id));
        Swal.fire("Success", "Application canceled successfully", "success");
        setIsCanceling(false);
      } else {
        const errorData = await response.json();
        alert("Failed to cancel application");
      }
    } catch (error) {
      Swal.fire("Error", "Could not cancel the application", "error");
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500">
        My Visa Applications
      </h1>

      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by country"
          className="p-2 border border-gray-300 rounded-lg w-full"
        />
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="spinner border-4 border-blue-500 border-t-transparent rounded-full w-16 h-16 animate-spin"></div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredApplications.length === 0 ? (
            <p>No applications found for the given country.</p>
          ) : (
            filteredApplications.map((app) => (
              <div
                key={app._id}
                className="bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
              >
                <figure>
                  <img
                    src={app.countryImage}
                    alt={app.country}
                    className="w-full h-56 object-cover rounded-t-lg"
                  />
                </figure>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-black">{app.countryName}</h2>
                  <p className="text-black text-sm italic mb-4">{app.visaType}</p>
                  <div className="space-y-2">
                    <p className="text-black">
                      <span className="font-semibold">Processing Time:</span> {app.processingTime}
                    </p>
                    <p className="text-black">
                      <span className="font-semibold">Fee:</span> ${app.fee}
                    </p>
                    <p className="text-black">
                      <span className="font-semibold">Validity:</span> {app.validity}
                    </p>
                    <p className="text-black">
                      <span className="font-semibold">Application Method:</span> {app.applicationMethod}
                    </p>
                    <p className="text-black">
                      <span className="font-semibold">Applied Date:</span>{" "}
                      {new Date(app.appliedDate).toLocaleDateString()}
                    </p>
                    <p className="text-black">
                      <span className="font-semibold">Applicant Name:</span>{" "}
                      {`${app.firstName} ${app.lastName}`}
                    </p>
                    <p className="text-black">
                      <span className="font-semibold">Applicant Email:</span> {app.email}
                    </p>
                  </div>
                  <button
                    disabled={isCanceling}
                    onClick={() => handleCancel(app._id)}
                    className={`mt-6 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ${isCanceling ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                  >
                    {isCanceling ? "Cancelling..." : "Cancel Application"}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default MyApplications;
