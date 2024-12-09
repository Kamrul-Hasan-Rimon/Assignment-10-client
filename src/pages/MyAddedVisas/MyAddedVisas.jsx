import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyAddedVisas = () => {
  const [visas, setVisas] = useState(useLoaderData());
  const [isCanceling, setIsCanceling] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false); 
  const [selectedVisa, setSelectedVisa] = useState(null);

  const handleCancel = async (id) => {
    setIsCanceling(true);
    try {
      await fetch(`http://localhost:5000/applyVisa/${id}`, {
        method: "DELETE",
      });
      setVisas(visas.filter((visa) => visa._id !== id));
      Swal.fire("Success", "Visa deleted successfully", "success");
      setIsCanceling(false);
    } catch (error) {
      Swal.fire("Error", "Could not delete the visa", "error");
    }
  }

  const handleUpdateClick = (visa) => {
    setSelectedVisa(visa); a
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
    };

    try {
      await fetch(`http://localhost:5000/applyVisa/${selectedVisa._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedVisa),
      });

      setVisas((prev) =>
        prev.map((visa) =>
          visa._id === selectedVisa._id ? { ...visa, ...updatedVisa } : visa
        )
      );

      Swal.fire("Success", "Visa updated successfully", "success");
      document.getElementById("updateModal").checked = false;
       setIsUpdating(false); 
    } catch (error) {
      Swal.fire("Error", "Could not update the visa", "error");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500">
        My Added Visas
      </h1>
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
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Visa Type:</span> {visa.visaType}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Processing Time:</span>{" "}
                {visa.processingTime}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Fee:</span> {visa.fee}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Validity:</span> {visa.validity}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Application Method:</span>{" "}
                {visa.applicationMethod}
              </p>
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
                  {isCanceling ? "Cancelling..." : "Delete"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <input type="checkbox" id="updateModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h2 className="text-2xl font-bold mb-4">Update Visa</h2>
          {selectedVisa && (
            <form onSubmit={handleUpdateSubmit}>
              {isUpdating ? (
                <div className="flex justify-center">
                  <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
                </div>
              ) : (
                <>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Country Name</label>
                    <input
                      type="text"
                      name="countryName"
                      defaultValue={selectedVisa.countryName}
                      className="w-full border border-gray-300 p-2 rounded-lg"
                    />
                  </div>
                  <div className="flex justify-end gap-4">
                    <label
                      htmlFor="updateModal"
                      className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg cursor-pointer"
                    >
                      Cancel
                    </label>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                    >
                      Update
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
