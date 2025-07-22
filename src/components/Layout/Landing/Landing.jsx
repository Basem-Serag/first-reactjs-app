import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import avatarImg from '../../../assets/imgs/avataaars.svg';
export default function Landing() {
  return (
    <>
      <section className="landing-section vh-100 text-white text-center py-5 d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center py-5">
            <div className="col-sm-6 col-lg-3">
              <div className="content p-4">
                <img src={avatarImg} alt="icon " className="img-fluid" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="content">
                <SectionTitle name="start Framework" />
                <p>Graphic Artist - Web Designer - Illustrator</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
