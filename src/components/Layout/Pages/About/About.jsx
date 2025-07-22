import React from 'react';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';

export default function About() {
  return (
    <>
      <section className="about-section text-white vh-100 d-flex flex-column justify-content-center align-items-center">
        <SectionTitle name="about component" />
        <div className="container">
          <div className="row px-5">
            <div className="col-md-6">
              <div className="content ps-md-4">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="content pe-md-4">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
