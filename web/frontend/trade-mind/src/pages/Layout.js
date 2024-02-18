import { Outlet, useNavigate } from "react-router-dom";
import '../Navbar.css';

const Layout = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <button className="nav-button" onClick={() => handleNavigation("/")}>
              Home
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-button" onClick={() => handleNavigation("/about")}>
              About
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-button" onClick={() => handleNavigation("/designdocument")}>
              Design Document
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-button" onClick={() => handleNavigation("/analytics")}>
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
