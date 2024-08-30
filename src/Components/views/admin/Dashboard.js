import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Sidebar';
import '../../../assets/css/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the token exists in localStorage
    const token = localStorage.getItem('token');

    if (!token) {
      // If no token is found, redirect to the login page
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Dashboard</h1>
        <p>Welcome to the Dashboard!</p>
        <div className="card-container">
          <div className="card">
            <h2>Gallery</h2>
            <p>View and manage your gallery items.</p>
          </div>
          <div className="card">
            <h2>News</h2>
            <p>View and manage the latest news updates.</p>
          </div>
          <div className="card">
            <h2>APBN</h2>
            <p>Overview of APBN data and reports.</p>
          </div>
          <div className="card">
            <h2>Data Summary</h2>
            <p>Check the summary of all data and statistics.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
