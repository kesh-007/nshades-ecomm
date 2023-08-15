// components/Layout.js
import React from 'react';
import Sidebar from '~/components/ui/SideBar';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
