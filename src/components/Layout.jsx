import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    <Footer />
    {children}
  </>
);

export default Layout;