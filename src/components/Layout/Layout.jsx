import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './../Core/Navbar/Navbar';
import Footer from './../Core/Footer/Footer';

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
