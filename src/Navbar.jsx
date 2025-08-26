import { Link } from "react-router-dom";
export default function Navbar() {
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
