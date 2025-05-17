import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthProvider';
import { useContext } from 'react';

const AddVisa = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const countryImage = e.target.countryImage.value;
        const countryName = e.target.countryName.value;
        const visaType = e.target.visaType.value;
        const processingTime = e.target.processingTime.value;
        const description = e.target.description.value;
        const ageRestriction = e.target.ageRestriction.value;
        const fee = e.target.fee.value;
        const validity = e.target.validity.value;
        const applicationMethod = e.target.applicationMethod.value;
        const addedBy = user?.email;

        const requiredDocuments = Array.from(
            e.target.querySelectorAll('input[name="requiredDocuments"]:checked')
        ).map((checkbox) => checkbox.value);

        const visaInfo = {
            countryImage,
            countryName,
            visaType,
            processingTime,
            description,
            ageRestriction,
            fee,
            validity,
            applicationMethod,
            requiredDocuments,
            addedBy,
            createdAt: new Date().toISOString()
        };

        // Show loading indicator
        Swal.fire({
            title: 'Adding Visa...',
            allowOutsideClick: false,
            didOpen: () => Swal.showLoading()
        });

        // First API call to addvisa collection
        fetch('http://localhost:5000/useraddedvisa', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(visaInfo),
        })
            .then(res => res.json())
            .then(addVisaResult => {
                // Second API call to allvisa collection
                return fetch('http://localhost:5000/addvisa', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(visaInfo),
                });
            })
            .then(res => res.json())
            .then(allVisaResult => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Visa added to both collections successfully',
                    icon: 'success',
                    confirmButtonText: 'OK',
                }).then(() => {
                    navigate('/'); // Redirect after success
                });
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message || 'Failed to add visa information',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            });
    };

    return (
        <div className="bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 min-h-screen py-16 mt-10 px-4">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Add Visa Information</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Form fields remain the same as in your original code */}
                    <div>
                        <label htmlFor="countryImage" className="block text-xl text-gray-800 font-semibold">Country Image</label>
                        <input
                            type="url"
                            name="countryImage"
                            placeholder="Enter country image URL"
                            className="mt-2 w-full p-4 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="countryName" className="block text-xl text-gray-800 font-semibold">Country Name</label>
                        <input
                            type="text"
                            name="countryName"
                            placeholder="Enter country name"
                            className="mt-2 w-full p-4 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="visaType" className="block text-xl text-gray-800 font-semibold">Visa Type</label>
                        <select
                            name="visaType"
                            className="mt-2 w-full p-4 border border-gray-300 rounded-lg"
                            required
                        >
                            <option value="">Select Visa Type</option>
                            <option value="Tourist visa">Tourist visa</option>
                            <option value="Student visa">Student visa</option>
                            <option value="Official visa">Official visa</option>
                            <option value="Business visa">Business visa</option>
                            <option value="Transit visa">Transit visa</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="processingTime" className="block text-xl text-gray-800 font-semibold">Processing Time (days)</label>
                        <input
                            type="number"
                            name="processingTime"
                            className="mt-2 w-full p-4 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xl text-gray-800 font-semibold">Required Documents</label>
                        <div className="mt-2 space-y-2">
                            {['Valid passport', 'Visa application form', 'Recent passport-sized photograph',
                                'Proof of financial means', 'Travel itinerary'].map((doc) => (
                                    <label key={doc} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            name="requiredDocuments"
                                            value={doc}
                                            className="mr-2"
                                        />
                                        {doc}
                                    </label>
                                ))}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-xl text-gray-800 font-semibold">Description</label>
                        <textarea
                            name="description"
                            placeholder="Enter visa description"
                            className="mt-2 w-full p-4 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="ageRestriction" className="block text-xl text-gray-800 font-semibold">Age Restriction (years)</label>
                        <input
                            type="number"
                            name="ageRestriction"
                            className="mt-2 w-full p-4 border border-gray-300 rounded-lg"
                        />
                    </div>

                    <div>
                        <label htmlFor="fee" className="block text-xl text-gray-800 font-semibold">Visa Fee (USD)</label>
                        <input
                            type="number"
                            name="fee"
                            className="mt-2 w-full p-4 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="validity" className="block text-xl text-gray-800 font-semibold">Visa Validity (months)</label>
                        <input
                            type="text"
                            name="validity"
                            className="mt-2 w-full p-4 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="applicationMethod" className="block text-xl text-gray-800 font-semibold">Application Method</label>
                        <input
                            type="text"
                            name="applicationMethod"
                            placeholder="e.g. Online application"
                            className="mt-2 w-full p-4 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-lg shadow-lg hover:bg-gradient-to-l transition-all duration-300"
                    >
                        Add Visa
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddVisa;