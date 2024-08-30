import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/Nav.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../assets/img/kabupatengrobogan.png"; // Path to your logo

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsNavCollapsed(true);
  };

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location]);

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center" onClick={handleNavClick}>
          <img src={logo} alt="Desa Curug" />
          <h1 className="ms-2 mb-0">Desa Curug</h1>
        </Link>

        <nav
          id="navbar"
          className={`navbar ${isNavCollapsed ? "" : "navbar-mobile"}`}
        >
          <ul>
            <li>
              <Link className="nav-link" to="/" onClick={handleNavClick}>
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/rekapan-data" onClick={handleNavClick}>
                Rekapan Data
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/galeri" onClick={handleNavClick}>
                Galeri
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/statistik-desa" onClick={handleNavClick}>
                Statistik Desa
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/stuktur-organisasi" onClick={handleNavClick}>
                Struktur Organisasi
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/tentang" onClick={handleNavClick}>
                Tentang Kami
              </Link>
            </li>
            <li className="dropdown">
              <a
                href="#apbn"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown();
                }}
                className="nav-link"
              >
                APBN Desa
              </a>
              <ul className={`dropdown-menu ${showDropdown ? "show" : ""}`}>
                <li>
                  <a
                    href="https://drive.google.com/link-to-2022"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    APBN 2022
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/link-to-2023"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    APBN 2023
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/link-to-2024"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    APBN 2024
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link className="getstarted nav-link" to="/login" onClick={handleNavClick}>
                Login
              </Link>
            </li>
          </ul>
          <i
            className={`bi mobile-nav-toggle ${
              isNavCollapsed ? "bi-list" : "bi-x"
            }`}
            onClick={toggleNav}
          ></i>
        </nav>
      </div>
      <div className="welcome-text">
        <span className="scrolling-text">
          Selamat Datang di Website Desa Curug Kecamatan Tegowanu Kabupaten Grobogan Provinsi Jawa Tengah
        </span>
      </div>
    </header>
  );
};

export default Header;
