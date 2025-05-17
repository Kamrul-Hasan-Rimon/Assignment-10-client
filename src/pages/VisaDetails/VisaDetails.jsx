import React, { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const VisaDetails = () => {
  const visa = useLoaderData();
  console.log('sdfwg',visa) 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; 
    setCurrentDate(formattedDate);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const appliedDate = e.target.appliedDate.value;
    const email = e.target.email.value;
    const fee = e.target.fee.value;
    const countryName = visa.countryName; 
    const visaType = visa.visaType; 
    const countryImage = visa.countryImage; 
    const validity = visa.validity; 
    const applicationMethod = visa.applicationMethod; 
    
    const processingTime = visa.processingTime; 
    const user = { firstName, lastName, appliedDate, email, fee, countryName, visaType, 
      processingTime, countryImage,validity,applicationMethod};

    try {
      const response = await fetch('http://localhost:5000/applyVisa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data)
      if (data.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: 'Visa application submitted successfully',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
        setIsModalOpen(false);
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to apply for visa. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please check your connection and try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div className="max-w-4xl mt-20 mx-auto p-6">
      {visa ? (
        <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
          <h1 className="text-4xl font-bold text-center">{visa.countryName}</h1>
          <img src={visa.countryImage} alt="Visa Image" />
          <p className="text-2xl text-center font-bold">Visa details</p>

          <div className="flex flex-col justify-between">
            <span className="text-lg font-semibold">
              <strong>Country Name:</strong> {visa.countryName}
            </span>
            <span className="text-lg font-semibold">
              <strong>Visa Type:</strong> {visa.visaType}
            </span>
            <span className="text-lg font-semibold mb-4">
              <strong>Visa Fee:</strong> ${visa.fee}
            </span>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn btn-primary bg-gradient-to-r from-purple-500 to-pink-500 text-white"
            >
              Apply for the Visa
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-xl">Loading visa details...</div>
      )}

      {/* Daisy UI Modal for applying */}
      <input
        type="checkbox"
        id="apply-visa-modal"
        className="modal-toggle"
        checked={isModalOpen}
        onChange={() => setIsModalOpen(!isModalOpen)}
      />
      <div className="modal">
        <div className="modal-box">
          <button
            htmlFor="apply-visa-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => setIsModalOpen(false)}
          >
            <IoMdClose />
          </button>
          <h2 className="text-2xl font-bold mb-4">Apply for {visa?.countryName}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              name="appliedDate"
              value={currentDate}
              readOnly
              className="block w-full border p-2 rounded bg-gray-100"
            />
            <input
              type="number"
              name="fee"
              placeholder={"Fee"}
              className="input input-bordered w-full"
              required
            />
            <button type="submit" className="btn btn-success w-full">
              Apply
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VisaDetails;
