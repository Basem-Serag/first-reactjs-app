import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [scrollY, setScrollY] = useState(false);
  useEffect(() => {
    // event callback handler
    const handleScroll = () => {
      setScrollY(window.scrollY > 0);
    };

    // onScroll Listener
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-md fixed-top navbar-dark ${
          scrollY ? 'py-2' : 'py-4'
        }`}
      >
        <div className="container">
          <Link
            className="navbar-brand text-uppercase fs-2 fw-bolder"
            aria-label="navbar brand link"
            to={'/'}
          >
            start framework
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold px-3 text-uppercase"
                  to={'about'}
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold px-3 text-uppercase"
                  to={'portfolio'}
                >
                  portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold px-3 text-uppercase"
                  to={'contact'}
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
