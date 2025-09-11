import { Link, useLocation } from "react-router-dom";
export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src="https://hw2l96z9d4lmwrzcpyznvzxnw.js.wpenginepowered.com/img/cgh-logo.svg" alt="Logo" />
          </Link>
        </div>
        <div className="navbar-menu">
          <ul>
            <li>
              <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
            </li>
            <li>
              <Link to="/work" className={location.pathname === "/work" ? "active" : ""}>Work</Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
