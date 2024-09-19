import React, { useState } from 'react';
import { ProSidebar, SidebarHeader, SidebarContent} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaTachometerAlt, FaUpload, FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Sidebar.css'; // Import your custom stylesheet

const SidebarComponent = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('token');
    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar-toggle" onClick={handleSidebarToggle}>
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ProSidebar className={`pro-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <SidebarHeader>
          <h2 className="sidebar-title">Admin Panel</h2>
        </SidebarHeader>
        <SidebarContent>
          <nav className="sidebar-nav">
            <a href="/Dashboard" className="sidebar-link">
              <FaTachometerAlt className="sidebar-icon" /> Dashboard
            </a>
            <a href="/daftar-gallery" className="sidebar-link">
              <FaUpload className="sidebar-icon" /> Daftar Gallery
            </a>
            <a href="/daftar-perangkat-desa" className="sidebar-link">
              <FaUpload className="sidebar-icon" /> Daftar Perangkat Desa
            </a>
            <div className="sidebar-footer-content" onClick={handleLogout}>
            <FaSignOutAlt className="sidebar-icon" /> Logout
          </div>
          </nav>
        </SidebarContent>
        {/* <SidebarFooter>
          <div className="sidebar-footer-content" onClick={handleLogout}>
            <FaSignOutAlt className="sidebar-icon" /> Logout
          </div>
        </SidebarFooter> */}
      </ProSidebar>
      <div className="main-content">
        {/* Main content */}
      </div>
    </div>
  );
};

export default SidebarComponent;
