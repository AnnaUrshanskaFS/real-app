import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Reall App
          <i className="bi bi-egg"></i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample03">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <NavLink to="about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                My Cards
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <NavLink to="signin" className="nav-link">
                Sign In
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="signup" className="nav-link">
                Sign Up
              </NavLink>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Buisness
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;