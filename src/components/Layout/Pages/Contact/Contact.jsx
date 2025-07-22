import React from 'react';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';

export default function Contact() {
  return (
    <>
      <section className="py-5 vh-100 text-center d-flex flex-column justify-content-center">
        <div className="container">
          <SectionTitle
            name="contact component"
            borderColor={'rgb(44, 62, 80)'}
          />
          <div className="row justify-content-center align-items-center pt-5">
            <div className="col-md-7">
              <form>
                <div className="mb-5">
                  <input
                    className="form-control border-0 border-bottom shadow-none"
                    type="text"
                    name="userName"
                    placeholder="Name"
                    aria-label="user name input"
                  />
                </div>

                <div className="mb-5">
                  <input
                    className="form-control border-0 border-bottom shadow-none"
                    type="number"
                    name="userAge"
                    placeholder="Age"
                    aria-label="user age input"
                  />
                </div>

                <div className="mb-5">
                  <input
                    className="form-control border-0 border-bottom shadow-none"
                    type="email"
                    name="userEmail"
                    placeholder="Email"
                    aria-label="user email input"
                  />
                </div>

                <div className="mb-5">
                  <input
                    className="form-control border-0 border-bottom shadow-none"
                    type="password"
                    name="userPassword"
                    placeholder="Password"
                    aria-label="user password input"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-submit me-auto d-block text-capitalize"
                >
                  send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
