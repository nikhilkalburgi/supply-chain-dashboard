import React from 'react';
import { Navbar } from './Navbar';

export const Layout = ({ children }) => (
  <div className="layout">
    <Navbar />
    <div className="main-content">
      <main className="content-area">{children}</main>
    </div>
  </div>
);