import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProvider";

const MyApplications = () => {
  const { user } = useContext(AuthContext); // Get current user
  const loaderData = useLoaderData();
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isCanceling, setIsCanceling] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Filter applications by logged-in user on initial load
  useEffect(() => {
    if (user && loaderData) {
      const userApplications = loaderData.filter(app => app.email === user.email);
      setApplications(userApplications);
      setFilteredApplications(userApplications);
      setIsLoading(false);
    }
  }, [user, loaderData]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter applications based on search term
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
        // Update both application states
        setApplications(prev => prev.filter((app) => app._id !== id));
        setFilteredApplications(prev => prev.filter((app) => app._id !== id));
        Swal.fire("Success", "Application canceled successfully", "success");
      } else {
        const errorData = await response.json();
        Swal.fire("Error", errorData.message || "Failed to cancel application", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Could not cancel the application", "error");
    } finally {
      setIsCanceling(false);
    }
  };

  return (
    <div className="max-w-6xl mt-28 mx-auto p-8 min-h-screen">
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
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="spinner border-4 border-blue-500 border-t-transparent rounded-full w-16 h-16 animate-spin"></div>
        </div>
      ) : (
        <>
          {filteredApplications.length === 0 ? (
            <div className="text-center py-10">
              {searchTerm ? (
                <p className="text-lg">No applications found for "{searchTerm}"</p>
              ) : (
                <p className="text-lg">You haven't applied for any visas yet.</p>
              )}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredApplications.map((app) => (
                <div
                  key={app._id}
                  className="bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
                >
                  <figure>
                    <img
                      src={app.countryImage}
                      alt={app.countryName}
                      className="w-full h-56 object-cover rounded-t-lg"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x225?text=Country+Image';
                      }}
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
                        <span className="font-semibold">Status:</span>{" "}
                        <span className={`font-semibold ${app.status === 'approved' ? 'text-green-600' :
                            app.status === 'rejected' ? 'text-red-600' :
                              'text-yellow-600'
                          }`}>
                          {app.status || 'pending'}
                        </span>
                      </p>
                    </div>
                    {app.status !== 'approved' && (
                      <button
                        disabled={isCanceling}
                        onClick={() => handleCancel(app._id)}
                        className={`mt-6 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ${isCanceling ? "opacity-50 cursor-not-allowed" : ""
                          }`}
                      >
                        {isCanceling ? "Cancelling..." : "Cancel Application"}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyApplications;