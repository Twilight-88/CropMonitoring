import React, { useEffect, useState } from 'react';

const ReportsPage = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Simulated fetch for reports data
    const fetchReports = async () => {
      try {
        // Replace this with your actual API call
        const response = await fetch('/api/reports');
        if (!response.ok) {
          throw new Error('Failed to load reports');
        }
        const data = await response.json();
        setReports(data);
      } catch (err) {
        setError('Fail Loading Reports. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">
        <i className="fas fa-file-alt me-2"></i> Reports
      </h1>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : error ? (
        <div className="alert alert-danger text-center">{error}</div>
      ) : reports.length === 0 ? (
        <div className="alert alert-warning text-center">No reports available.</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-success">
              <tr>
                <th>#</th>
                <th>Report Title</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, index) => (
                <tr key={report.id}>
                  <td>{index + 1}</td>
                  <td>{report.title}</td>
                  <td>{new Date(report.date).toLocaleDateString()}</td>
                  <td>{report.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ReportsPage;
