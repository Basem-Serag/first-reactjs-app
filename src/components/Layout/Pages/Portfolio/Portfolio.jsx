import React, { useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import img1 from '../../../../assets/imgs/port1.png';
import img2 from '../../../../assets/imgs/port2.png';
import img3 from '../../../../assets/imgs/port3.png';
import ImagePreviewModal from '../../../Shared/ImagePreviewModal/ImagePreviewModal';
export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  const showImagePreviewModal = (src) => setSelectedImage(src);
  const dismissImagePreviewModal = () => setSelectedImage(null);
  const imgsList = Array(2).fill([img1, img2, img3]).flat();
  return (
    <>
      <section className="portfolio-section py-5 text-center">
        <div className="container pt-5">
          <SectionTitle
            name="portfolio component"
            borderColor={'rgb(44, 62, 80)'}
          />
          <div className="row pb-2 g-5">
            {imgsList.map((imgSrc, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="content position-relative"
                  role="button"
                  onClick={() => showImagePreviewModal(imgSrc)}
                >
                  <img
                    src={imgSrc}
                    alt="portfolio image"
                    className="img-fluid rounded-3"
                  />
                  <div className="img-overlay rounded-3">
                    <i className="fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedImage && (
          <ImagePreviewModal
            imgSrc={selectedImage}
            dismissModal={dismissImagePreviewModal}
          />
        )}
      </section>
    </>
  );
}
