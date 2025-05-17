import React, { useEffect, useState } from 'react';
// import { useAuth } from '../../context/AuthContext'; // Or your auth context path

const OverviewPage = () => {
  // const { user } = useAuth(); // Get user info if needed
  const [overviewData, setOverviewData] = useState({
    activeApplications: 0,
    completedApplications: 0,
    pendingDocuments: 0,
    // Add more as needed
  });
  const [recentApplications, setRecentApplications] = useState([]);

  // TODO: Fetch actual data for cards and recent applications table
  useEffect(() => {
    // Placeholder data - replace with API calls
    setOverviewData({
      activeApplications: 3,
      completedApplications: 5,
      pendingDocuments: 1,
    });
    setRecentApplications([
      { id: 1, visaType: 'Tourist Visa', country: 'France', status: 'Submitted', date: '2023-10-01' },
      { id: 2, visaType: 'Student Visa', country: 'Canada', status: 'Approved', date: '2023-09-15' },
    ]);
  }, []);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-neutral-content mb-6">Dashboard Overview</h1>

      {/* Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card bg-primary text-primary-content shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Active Applications</h2>
            <p className="text-4xl font-bold">{overviewData.activeApplications}</p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-sm btn-outline">View All</button>
            </div> */}
          </div>
        </div>
        <div className="card bg-secondary text-secondary-content shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Completed Applications</h2>
            <p className="text-4xl font-bold">{overviewData.completedApplications}</p>
          </div>
        </div>
        <div className="card bg-accent text-accent-content shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Pending Documents</h2>
            <p className="text-4xl font-bold">{overviewData.pendingDocuments}</p>
          </div>
        </div>
        {/* Add more cards as needed */}
      </section>

      {/* Recent Applications Table Section */}
      <section>
        <h2 className="text-2xl font-semibold text-neutral-content mb-4">Recent Applications</h2>
        <div className="overflow-x-auto">
          <table className="table w-full bg-base-200 shadow">
            <thead>
              <tr>
                <th></th>
                <th>Visa Type</th>
                <th>Destination Country</th>
                <th>Status</th>
                <th>Application Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {recentApplications.length > 0 ? recentApplications.map((app, index) => (
                <tr key={app.id} className="hover">
                  <th>{index + 1}</th>
                  <td>{app.visaType}</td>
                  <td>{app.country}</td>
                  <td><span className={`badge ${app.status === 'Approved' ? 'badge-success' : app.status === 'Submitted' ? 'badge-warning' : 'badge-info'}`}>{app.status}</span></td>
                  <td>{new Date(app.date).toLocaleDateString()}</td>
                  <td>
                    <button className="btn btn-xs btn-outline btn-primary">View Details</button>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="6" className="text-center py-4">No recent applications found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default OverviewPage;