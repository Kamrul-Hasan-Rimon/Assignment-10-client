import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const AccountSecurityOverviewPage = () => {
    const { user } = useContext(AuthContext);

    const [securityStatus, setSecurityStatus] = useState({
        twoFactorEnabled: false,
        passwordLastChanged: null,
        unverifiedLogins: 0,
    });
    const [recentActivity, setRecentActivity] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (user) {
            setIsLoading(true);
            setTimeout(() => {
                setSecurityStatus({
                    twoFactorEnabled: Math.random() > 0.5,
                    passwordLastChanged: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
                    unverifiedLogins: Math.floor(Math.random() * 3),
                });
            
                setIsLoading(false);
            }, 1000);
        } else {
            setIsLoading(false);
        }
    }, [user]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-full p-10">
                <span className="loading loading-lg text-primary"></span>
                <p className="ml-4 text-xl">Loading Account Overview...</p>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="text-center p-10">
                <h2 className="text-2xl font-semibold mb-4">Access Denied</h2>
                <p className="mb-6">Please log in to view your account overview.</p>
                <Link to="/login" className="btn btn-primary">Login</Link>
            </div>
        )
    }

    return (
        <div className="space-y-8 p-4 md:p-6">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-full max-w-fit p-4 text-neutral-content mb-6">
                Welcome, {user.displayName || user.email}!
            </h1>
            <p className="text-base-content/80 -mt-4 mb-8">Here's an overview of your account security and recent activity.</p>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Profile Card */}
                <div className="card bg-base-200 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Account Information</h2>
                        <p className="text-sm">Email: {user.email}</p>
                        {user.phoneNumber && <p className="text-sm">Phone: {user.phoneNumber || 'Not provided'}</p>}
                        <div className="card-actions justify-end mt-4">
                            <Link to="/dashboard/profile" className="btn btn-sm btn-outline btn-primary">
                                View/Edit Profile
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Password Security Card */}
                <div className="card bg-base-200 shadow-xl">
                    <div className="card-body">
                        {/* <LockClosedIcon className="w-10 h-10 text-warning mb-2" /> */}
                        <h2 className="card-title">Password Security</h2>
                        {securityStatus.passwordLastChanged ? (
                            <p className="text-sm">Last changed: {new Date(securityStatus.passwordLastChanged).toLocaleDateString()}</p>
                        ) : (
                            <p className="text-sm text-warning-content">Consider changing your password regularly.</p>
                        )}
                        <p className="text-xs mt-1">Use a strong, unique password for best security.</p>
                        <div className="card-actions justify-end mt-4">
                            <Link to="/dashboard/settings/change-password" className="btn btn-sm btn-outline btn-warning">
                                Change Password
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Two-Factor Authentication Card */}
                <div className="card bg-base-200 shadow-xl">
                    <div className="card-body">
                        {/* <DevicePhoneMobileIcon className={`w-10 h-10 mb-2 ${securityStatus.twoFactorEnabled ? 'text-success' : 'text-error'}`} /> */}
                        <h2 className="card-title">Two-Factor Authentication (2FA)</h2>
                        {securityStatus.twoFactorEnabled ? (
                            <p className="text-sm text-success-content flex items-center">
                                {/* <ShieldCheckIcon className="w-5 h-5 mr-1 inline"/> */}
                                Status: Enabled
                            </p>
                        ) : (
                            <p className="text-sm text-error-content">Status: Disabled - Consider enabling for enhanced security.</p>
                        )}
                        <div className="card-actions justify-end mt-4">
                            <Link to="/dashboard/settings/2fa" className="btn btn-sm btn-outline btn-info">
                                Manage 2FA
                            </Link>
                        </div>
                    </div>
                </div>

                {securityStatus.unverifiedLogins > 0 && (
                    <div className="card bg-warning text-warning-content shadow-xl md:col-span-2 lg:col-span-1">
                        <div className="card-body">
                            {/* <BellAlertIcon className="w-10 h-10 mb-2" /> */}
                            <h2 className="card-title">Security Alerts</h2>
                            <p className="text-sm">
                                You have {securityStatus.unverifiedLogins} unverified login
                                {securityStatus.unverifiedLogins > 1 ? 's' : ''} or security events.
                            </p>
                            <div className="card-actions justify-end mt-4">
                                <Link to="/dashboard/security-activity" className="btn btn-sm btn-outline">Review Activity</Link>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
};

export default AccountSecurityOverviewPage;