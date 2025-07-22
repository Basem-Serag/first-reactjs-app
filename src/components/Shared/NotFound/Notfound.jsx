import React from 'react';
import imageNotFound from '../../../assets/imgs/404-page.png';

export default function Notfound() {
  return (
    <>
      <section className="py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <div className="content d-flex justify-content-center">
                <img src={imageNotFound} alt="imageNotFound" className="w-75" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
