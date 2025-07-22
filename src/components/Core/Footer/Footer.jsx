import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row g-sm-5 g-md-4">
            <div className="col-md-4">
              <div className="content">
                <h4>LOCATION</h4>
                <p>2215 John Daniel Drive</p>
                <span>Clark, MO 65243</span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="content">
                <h4>AROUND THE WEB</h4>
                <ul className="list-unstyled d-flex justify-content-center gap-2">
                  <li className="list-item p-1 border border-1 rounded-circle">
                    <Link
                      to={'#'}
                      className="text-reset"
                      aria-label="facebook link"
                    >
                      <i className="fa-brands fa-facebook p-1"></i>
                    </Link>
                  </li>
                  <li className="list-item p-1 border border-1 rounded-circle">
                    <Link
                      to={'#'}
                      className="text-reset"
                      aria-label="twitter link"
                    >
                      <i className="fa-brands fa-twitter mx-1"></i>
                    </Link>
                  </li>
                  <li className="list-item p-1 border border-1 rounded-circle">
                    <Link
                      to={'#'}
                      className="text-reset"
                      aria-label="linkedin link"
                    >
                      <i className="fa-brands fa-linkedin-in mx-1"></i>
                    </Link>
                  </li>
                  <li className="list-item p-1 border border-1 rounded-circle">
                    <Link
                      to={'#'}
                      className="text-reset"
                      aria-label="globe link"
                    >
                      <i className="fa-solid fa-globe mx-1"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="content">
                <h4>ABOUT FREELANCER</h4>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-box">
          <p>Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
