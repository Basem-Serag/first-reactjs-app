import React from 'react';

export default function ImagePreviewModal({ imgSrc, dismissModal }) {
  return (
    <>
      <div className="modal show d-block" tabIndex={-1} onClick={dismissModal}>
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-body p-0">
              <img
                src={imgSrc}
                alt="Image preview"
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop show"></div>
    </>
  );
}
