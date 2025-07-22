import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './../Core/footer/Footer';
import Navbar from '../Core/Navbar/Navbar';

export default function Layout() {
  return (
    <>
      <div className="layout-container">
        <Navbar />
        <div className="pt-5 min-vh-100">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
