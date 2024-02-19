import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "../Navbar.css";
import { useEffect, useState } from "react";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setActiveLink(location.pathname);
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => window.removeEventListener("resize", handleWindowSizeChange);
  }, [location]);

  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth < 768); // Standard mobile screen size
  };

  const handleNavigation = (path) => {
    setActiveLink(path);
    navigate(path);
  };

  const renderNavLinks = () => {
    return (
      <ul className={`nav-list ${isMobile ? 'vertical' : ''}`}>
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
            Roadmap
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-button ${
              activeLink === "/analytics" ? "active" : ""
            }`}
            onClick={() => handleNavigation("/analytics")}
          >
            Analytics
          </button>
        </li>
      </ul>
      
    );
  };

  return (
    <>
      <nav className="nav">
        {isMobile ? (
          // Render hamburger menu for mobile
          <div className="hamburger-menu">
            <input type="checkbox" id="menu-toggle" />
            <label htmlFor="menu-toggle" className="menu-icon">
              <div></div>
              <div></div>
              <div></div>
            </label>
            <div className="menu">
              {renderNavLinks()}
            </div>
          </div>
        ) : (
          // Render regular nav links for non-mobile
          renderNavLinks()
        )}
        <hr /> 
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
