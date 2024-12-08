import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyApplications = () => {
  const [applications, setApplications] = useState(useLoaderData());

  const handleCancel = async (id) => {

      const response = await fetch(`http://localhost:5000/myApplications/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setApplications(applications.filter((app) => app._id !== id));
        Swal.fire("Success", "Application canceled successfully", "success");
      } else {
        throw new Error("Failed to cancel application");
      }
    
  };

  return (
    <div className="max-w-6xl mx-auto p-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-center text-black">
        My Visa Applications
      </h1>

      {!applications.length ? (
        <p className="text-center text-black text-lg">
          No visa applications found.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app) => (
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
                <h2 className="text-2xl font-bold mb-2 text-black">
                  {app.country}
                </h2>
                <p className="text-black text-sm italic mb-4">
                  {app.visaType}
                </p>
                <div className="text-black space-y-2">
                  <p>
                    <span className="font-semibold">Processing Time:</span>{" "}
                    {app.processingTime}
                  </p>
                  <p>
                    <span className="font-semibold">Fee:</span> ${app.fee}
                  </p>
                  <p>
                    <span className="font-semibold">Validity:</span>{" "}
                    {app.validity}
                  </p>
                  <p>
                    <span className="font-semibold">Application Method:</span>{" "}
                    {app.applicationMethod}
                  </p>
                  <p>
                    <span className="font-semibold">Applied Date:</span>{" "}
                    {new Date(app.appliedDate).toLocaleDateString()}
                  </p>
                  <p>
                    <span className="font-semibold">Applicant Name:</span>{" "}
                    {`${app.firstName} ${app.lastName}`}
                  </p>
                  <p>
                    <span className="font-semibold">Applicant Email:</span>{" "}
                    {app.email}
                  </p>
                </div>
                <button
                  onClick={() => handleCancel(app._id)}
                  className="mt-6 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
                >
                  Cancel Application
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyApplications;
