import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Swal from 'sweetalert2';

const ProfilePage = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        displayName: '',
        phoneNumber: '',
        photoURL: ''
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (user) {
            setFormData({
                displayName: user.displayName || '',
                phoneNumber: user.phoneNumber || '',
                photoURL: user.photoURL || ''
            });
            setIsLoading(false);
        }
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmitEdit = async (e) => {
        e.preventDefault();

        try {
            Swal.fire({
                title: 'Updating Profile...',
                allowOutsideClick: false,
                didOpen: () => Swal.showLoading()
            });

            await updateUserProfile(formData);

            Swal.fire({
                icon: 'success',
                title: 'Profile Updated!',
                text: 'Your changes have been saved successfully',
                timer: 1500,
                showConfirmButton: false
            });

            setIsEditing(false);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Update Failed',
                text: error.message || 'Failed to update profile. Please try again.',
                confirmButtonColor: '#3085d6'
            });
        }
    };



    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Not Logged In</h2>
                    <p>Please login to view your profile</p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto p-4 space-y-6">
            <h1 className="text-3xl font-bold text-center mb-8">My Profile</h1>

            <div className="card bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <div className="avatar mb-4">
                        <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img
                                src={user?.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.displayName)}&background=random`}
                                alt={`${user?.displayName}'s avatar`}
                            />
                        </div>
                    </div>

                    {!isEditing ? (
                        <>
                            <h2 className="card-title text-2xl">{user?.displayName || 'User'}</h2>
                            <p className="text-lg">
                                {user?.email}
                                {user?.emailVerified && (
                                    <span className="badge badge-success badge-outline ml-2">Verified</span>
                                )}
                            </p>
                            {user?.phoneNumber && (
                                <p className="text-base">Phone: {user?.phoneNumber || 'Not provided'}</p>
                            )}
                            <p className="text-sm text-gray-500 mt-2">
                                Member since: {new Date(user?.metadata?.creationTime).toLocaleDateString()}
                            </p>
                            <div className="card-actions justify-end mt-6">
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="btn btn-primary"
                                >
                                    Edit Profile
                                </button>
                            </div>
                        </>
                    ) : (
                        <form onSubmit={handleSubmitEdit} className="w-full space-y-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="displayName"
                                    value={formData.displayName}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full"
                                    placeholder="Optional"
                                />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Profile Photo URL</span>
                                </label>
                                <input
                                    type="url"
                                    name="photoURL"
                                    value={formData.photoURL}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full"
                                    placeholder="https://example.com/photo.jpg"
                                />
                            </div>

                            <div className="card-actions justify-end mt-6 space-x-2">
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(false)}
                                    className="btn btn-ghost"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>

            {/* Security Section */}
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Security</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-medium">Password</h3>
                                <p className="text-sm text-gray-500">Last changed: {user?.metadata?.lastSignInTime ? new Date(user?.metadata?.lastSignInTime).toLocaleDateString() : 'Unknown'}</p>
                            </div>
                            <button
                                className="btn btn-outline btn-secondary"
                                onClick={() => {
                                    Swal.fire({
                                        icon: 'info',
                                        title: 'Change Password',
                                        text: 'This feature will be available soon!',
                                        confirmButtonColor: '#3085d6'
                                    });
                                }}
                            >
                                Change Password
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;