import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../assets/css/Dashboard.css'; // External CSS file for styles from <style> block

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 d-md-block sidebar p-0">
          <div className="p-4">
            <h4 className="text-white mb-4">
              <span style={{ color: 'var(--accent-yellow)', fontWeight: 'bold' }}>Agri</span>Vision
            </h4>
            <hr className="bg-light" />
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <i className="fas fa-tachometer-alt"></i> Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-upload"></i> Upload Images
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-history"></i> Analysis History
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-map-marked-alt"></i> Field Maps
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-bell"></i> Alerts
                  <span className="alert-badge">3</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-chart-line"></i> Reports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-cog"></i> Settings
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9 col-lg-10 ms-sm-auto main-content p-0">
          {/* Top Navbar */}
          <nav className="navbar navbar-expand navbar-light bg-white border-bottom p-3">
            <div className="container-fluid">
              <div className="d-flex align-items-center">
                <button className="btn btn-sm d-md-none me-3">
                  <i className="fas fa-bars"></i>
                </button>
                <h5 className="mb-0">Crop Monitoring Dashboard</h5>
              </div>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                    <i className="fas fa-user-circle me-1"></i> John Farmer
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><a className="dropdown-item" href="#"><i className="fas fa-user me-2"></i> Profile</a></li>
                    <li><a className="dropdown-item" href="#"><i className="fas fa-cog me-2"></i> Settings</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt me-2"></i> Logout</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>

          {/* Dashboard Content */}
          <div className="container-fluid p-4">
            {/* Alerts */}
            <div className="row mb-4">
              <div className="col-12">
                <div className="card border-danger dashboard-card">
                  <div className="card-header bg-white border-danger text-danger">
                    <i className="fas fa-exclamation-triangle me-2"></i> Urgent Alerts
                  </div>
                  <div className="card-body">
                    <div className="alert alert-danger d-flex align-items-center mb-2">
                      <i className="fas fa-bug fa-2x me-3"></i>
                      <div>
                        <h5 className="mb-1">Pest Detected: Fall Armyworm</h5>
                        <p className="mb-0">Identified in Field B (South Section) - Recommended immediate action</p>
                      </div>
                    </div>
                    <div className="alert alert-warning d-flex align-items-center mb-2">
                      <i className="fas fa-leaf fa-2x me-3"></i>
                      <div>
                        <h5 className="mb-1">Disease Detected: Late Blight</h5>
                        <p className="mb-0">Early signs detected in Field A - 15% infection probability</p>
                      </div>
                    </div>
                    <div className="alert alert-info d-flex align-items-center">
                      <i className="fas fa-tint fa-2x me-3"></i>
                      <div>
                        <h5 className="mb-1">Irrigation Needed</h5>
                        <p className="mb-0">Soil moisture levels below optimal in Field C</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Upload & Field Health Overview */}
            <div className="row">
              {/* Upload */}
              <div className="col-lg-4 mb-4">
                <div className="card dashboard-card h-100">
                  <div className="card-header bg-white">
                    <h5 className="mb-0"><i className="fas fa-upload me-2"></i>Upload Crop Images</h5>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <div className="upload-area mb-3">
                      <i className="fas fa-cloud-upload-alt fa-3x mb-3 text-muted"></i>
                      <h5>Drag & Drop Images</h5>
                      <p className="text-muted">or click to browse files</p>
                      <small className="text-muted">Supports JPG, PNG (Max 10MB)</small>
                    </div>
                    <div className="mt-auto">
                      <h6>Recent Uploads</h6>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          Field_A_20230615.jpg
                          <span className="badge bg-warning text-dark">Processing</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          Field_B_20230614.jpg
                          <span className="badge bg-success">Completed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Field Health Overview */}
              <div className="col-lg-8 mb-4">
                <div className="card dashboard-card h-100">
                  <div className="card-header bg-white">
                    <h5 className="mb-0"><i className="fas fa-map-marked-alt me-2"></i>Field Health Overview</h5>
                  </div>
                  <div className="card-body">
                    <div className="row mb-4">
                      <div className="col-md-3 col-6 text-center">
                        <div className="p-3 border rounded">
                          <h3 className="text-success">85%</h3>
                          <small className="text-muted">Healthy Plants</small>
                        </div>
                      </div>
                      <div className="col-md-3 col-6 text-center">
                        <div className="p-3 border rounded">
                          <h3 className="text-warning">12%</h3>
                          <small className="text-muted">At Risk</small>
                        </div>
                      </div>
                      <div className="col-md-3 col-6 text-center">
                        <div className="p-3 border rounded">
                          <h3 className="text-danger">3%</h3>
                          <small className="text-muted">Infected</small>
                        </div>
                      </div>
                      <div className="col-md-3 col-6 text-center">
                        <div className="p-3 border rounded">
                          <h3>24</h3>
                          <small className="text-muted">Issues Detected</small>
                        </div>
                      </div>
                    </div>
                    <canvas id="healthTrendChart" height="200"></canvas>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional sections like Recent Analysis Results can go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
