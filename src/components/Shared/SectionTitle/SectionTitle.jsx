import React from 'react';

export default function SectionTitle({ name, borderColor }) {
  return (
    <>
      <h1 className="text-uppercase fw-bold">{name}</h1>
      <div className="d-flex align-items-center justify-content-center my-3">
        <div
          className="border-style"
          style={{ background: borderColor ? borderColor : 'white' }}
        ></div>
        <i className="fa-solid fa-star mx-3"></i>
        <div
          className="border-style"
          style={{ background: borderColor ? borderColor : 'white' }}
        ></div>
      </div>
    </>
  );
}
