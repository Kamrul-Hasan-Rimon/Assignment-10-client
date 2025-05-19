import { useState, useEffect, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProvider";

const MyAddedVisas = () => {
  const { user } = useContext(AuthContext);
  const loaderData = useLoaderData();
  const [visas, setVisas] = useState([]);
  const [isCanceling, setIsCanceling] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedVisa, setSelectedVisa] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Filter visas by logged-in user on initial load
  useEffect(() => {
    if (user && loaderData) {
      const userVisas = loaderData.filter(visa => visa.addedBy === user.email);
      setVisas(userVisas);
      setIsLoading(false);
    }
  }, [user, loaderData]);

  const handleCancel = async (id) => {
    setIsCanceling(true);
    try {
      const response = await fetch(`https://visa-navigator-server-lilac.vercel.app/addedvisas/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setVisas(prev => prev.filter(visa => visa._id !== id));
        Swal.fire("Success", "Visa deleted successfully", "success");
      } else {
        const errorData = await response.json();
        Swal.fire("Error", errorData.message || "Failed to delete visa", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Could not delete the visa", "error");
    } finally {
      setIsCanceling(false);
    }
  };

  const handleUpdateClick = (visa) => {
    // Verify the visa belongs to the current user before allowing update
    if (visa.addedBy === user.email) {
      setSelectedVisa(visa);
    } else {
      Swal.fire("Error", "You can only update visas you added", "error");
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    setIsUpdating(true);

    const updatedVisa = {
      countryName: e.target.countryName.value,
      visaType: e.target.visaType.value,
      processingTime: e.target.processingTime.value,
      fee: e.target.fee.value,
      validity: e.target.validity.value,
      applicationMethod: e.target.applicationMethod.value,
      addedBy: selectedVisa.addedBy,
      updatedAt: new Date().toISOString()
    };

    try {
      const response = await fetch(`https://visa-navigator-server-lilac.vercel.app/addedvisas/${selectedVisa._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedVisa),
      });
      console.log(response);
      if (response.ok) {
        setVisas(prev =>
          prev.map(visa =>
            visa._id === selectedVisa._id ? { ...visa, ...updatedVisa } : visa
          )
        );
        Swal.fire("Success", "Visa updated successfully", "success");
        document.getElementById("updateModal").checked = false;
      } else {
        const errorData = await response.json();
        Swal.fire("Error", errorData.message || "Failed to update visa", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Could not update the visa", "error");
    } finally {
      setIsUpdating(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="spinner border-4 border-blue-500 border-t-transparent rounded-full w-16 h-16 animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500">
        My Added Visas
      </h1>

      {visas.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl">You haven't added any visas yet.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visas.map((visa) => (
            <div
              key={visa._id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <img
                className="w-full h-56 object-cover rounded-t-lg"
                src={visa.countryImage}
                alt={visa.countryName}
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  {visa.countryName}
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><span className="font-semibold">Visa Type:</span> {visa.visaType}</p>
                  <p><span className="font-semibold">Processing Time:</span> {visa.processingTime}</p>
                  <p><span className="font-semibold">Fee:</span> ${visa.fee}</p>
                  <p><span className="font-semibold">Validity:</span> {visa.validity}</p>
                  <p><span className="font-semibold">Application Method:</span> {visa.applicationMethod}</p>
                  {visa.updatedAt && (
                    <p className="text-xs text-gray-400">
                      Last updated: {new Date(visa.updatedAt).toLocaleString()}
                    </p>
                  )}
                </div>
                <div className="mt-4 flex gap-4">
                  <label
                    onClick={() => handleUpdateClick(visa)}
                    htmlFor="updateModal"
                    className="flex-1 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 text-center cursor-pointer"
                  >
                    Update
                  </label>
                  <button
                    onClick={() => handleCancel(visa._id)}
                    className={`flex-1 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ${isCanceling ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    disabled={isCanceling}
                  >
                    {isCanceling ? "Deleting..." : "Delete"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Update Modal */}
      <input type="checkbox" id="updateModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-w-md">
          <h2 className="text-2xl font-bold mb-4">Update Visa</h2>
          {selectedVisa && (
            <form onSubmit={handleUpdateSubmit} className="space-y-4">
              {isUpdating ? (
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
                </div>
              ) : (
                <>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Country Name</span>
                    </label>
                    <input
                      type="text"
                      name="countryName"
                      defaultValue={selectedVisa.countryName}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Visa Type</span>
                    </label>
                    <input
                      type="text"
                      name="visaType"
                      defaultValue={selectedVisa.visaType}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">Processing Time</span>
                      </label>
                      <input
                        type="text"
                        name="processingTime"
                        defaultValue={selectedVisa.processingTime}
                        className="input input-bordered w-full"
                        required
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">Fee ($)</span>
                      </label>
                      <input
                        type="number"
                        name="fee"
                        defaultValue={selectedVisa.fee}
                        className="input input-bordered w-full"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">Validity</span>
                      </label>
                      <input
                        type="text"
                        name="validity"
                        defaultValue={selectedVisa.validity}
                        className="input input-bordered w-full"
                        required
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">Application Method</span>
                      </label>
                      <input
                        type="text"
                        name="applicationMethod"
                        defaultValue={selectedVisa.applicationMethod}
                        className="input input-bordered w-full"
                        required
                      />
                    </div>
                  </div>

                  <div className="modal-action">
                    <label
                      htmlFor="updateModal"
                      className="btn btn-ghost"
                    >
                      Cancel
                    </label>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={isUpdating}
                    >
                      {isUpdating ? "Updating..." : "Update Visa"}
                    </button>
                  </div>
                </>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAddedVisas;
