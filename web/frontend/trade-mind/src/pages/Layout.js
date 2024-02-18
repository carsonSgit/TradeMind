import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "../Navbar.css";
import { useEffect, useState } from "react";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleNavigation = (path) => {
    setActiveLink(path);
    navigate(path);
  };

  return (
    <>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <button
              className={`nav-button ${activeLink === "/" ? "active" : ""}`}
              onClick={() => handleNavigation("/")}
            >
              Home
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-button ${activeLink === "/about" ? "active" : ""}`}
              onClick={() => handleNavigation("/about")}
            >
              About
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-button ${
                activeLink === "/designdocument" ? "active" : ""
              }`}
              onClick={() => handleNavigation("/designdocument")}
            >
              Design Document
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-button ${activeLink === "/analytics" ? "active" : ""}`}
              onClick={() => handleNavigation("/analytics")}
            >
              Analytics
            </button>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
