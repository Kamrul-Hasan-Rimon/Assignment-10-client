import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom'; // Assuming you use loader data

const UserApplicationsPage = () => {
    const initialApplications = useLoaderData(); // Get data from your route loader
    const [applications, setApplications] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [sortConfig, setSortConfig] = useState({ key: 'applicationDate', direction: 'descending' });
    const [filterStatus, setFilterStatus] = useState(''); // e.g., 'All', 'Pending', 'Approved'

    useEffect(() => {
        if (initialApplications) {
            setApplications(initialApplications);
            setIsLoading(false);
        } else {
            // Handle case where loader might not have run or returned data
            // This part might not be needed if loader always provides data or throws
            setIsLoading(false);
            setError("Could not load applications.");
        }
    }, [initialApplications]);

    // TODO: Implement sorting logic based on sortConfig
    const sortedApplications = React.useMemo(() => {
        let sortableItems = [...applications];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [applications, sortConfig]);

    // TODO: Implement filtering logic based on filterStatus
    const filteredApplications = React.useMemo(() => {
        if (!filterStatus || filterStatus === 'All') {
            return sortedApplications;
        }
        return sortedApplications.filter(app => app.status === filterStatus); // Assuming 'status' field
    }, [sortedApplications, filterStatus]);


    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    if (isLoading) {
        return <div className="flex justify-center items-center h-full"><span className="loading loading-lg"></span>Loading your applications...</div>;
    }

    if (error) {
        return <div className="alert alert-error shadow-lg"><div><span>Error: {error}</span></div></div>;
    }

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-neutral-content mb-6">My Visa Applications</h1>

            {/* Filters and Sorters */}
            <div className="flex flex-wrap gap-4 mb-6 items-center p-4 bg-base-200 rounded-lg shadow">
                <div>
                    <label htmlFor="statusFilter" className="label-text mr-2">Filter by Status:</label>
                    <select
                        id="statusFilter"
                        className="select select-bordered select-sm"
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                    >
                        <option value="">All Statuses</option>
                        <option value="Pending">Pending</option>
                        <option value="Submitted">Submitted</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Action Required">Action Required</option>
                        {/* Add more statuses based on your data */}
                    </select>
                </div>
       
            </div>


            {filteredApplications.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="table w-full bg-base-200 shadow">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th onClick={() => requestSort('visaType')} className="cursor-pointer">
                                    Visa Type {sortConfig.key === 'visaType' ? (sortConfig.direction === 'ascending' ? '🔼' : '🔽') : ''}
                                </th>
                                <th onClick={() => requestSort('destinationCountry')} className="cursor-pointer">
                                    Country {sortConfig.key === 'destinationCountry' ? (sortConfig.direction === 'ascending' ? '🔼' : '🔽') : ''}
                                </th>
                                <th onClick={() => requestSort('applicationDate')} className="cursor-pointer">
                                    Applied On {sortConfig.key === 'applicationDate' ? (sortConfig.direction === 'ascending' ? '🔼' : '🔽') : ''}
                                </th>
                                <th onClick={() => requestSort('status')} className="cursor-pointer">
                                    Status {sortConfig.key === 'status' ? (sortConfig.direction === 'ascending' ? '🔼' : '🔽') : ''}
                                </th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredApplications.map((app, index) => (
                                <tr key={app._id || app.id} className="hover"> {/* Use a unique key */}
                                    <td>{index + 1}</td>
                                    <td>{app.visaType || 'N/A'}</td> {/* Adapt field names */}
                                    <td>{app.destinationCountry || 'N/A'}</td>
                                    <td>{app.applicationDate ? new Date(app.applicationDate).toLocaleDateString() : 'N/A'}</td>
                                    <td>
                                        <span className={`badge ${app.status === 'Approved' ? 'badge-success' :
                                                app.status === 'Pending' || app.status === 'Submitted' ? 'badge-warning' :
                                                    app.status === 'Rejected' ? 'badge-error' : 'badge-info'
                                            }`}>
                                            {app.status || 'N/A'}
                                        </span>
                                    </td>
                                    <td>
                                        <Link to={`/dashboard/application-details/${app._id || app.id}`} className="btn btn-xs btn-outline btn-primary">
                                            View
                                        </Link>
                                        {/* Add other actions like 'Upload Documents' if applicable */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center py-10">
                    <p className="text-xl text-base-content/70">You haven't applied for any visas yet.</p>
                    <Link to="/allvisas" className="btn btn-primary mt-4">Explore Visas</Link>
                </div>
            )}
        </div>
    );
};

export default UserApplicationsPage;