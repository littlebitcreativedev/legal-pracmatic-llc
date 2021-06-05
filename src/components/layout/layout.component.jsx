import React from 'react';
import PropTypes from 'prop-types';

// components
import Header from '../header/header.component';
import Footer from '../footer/footer.component';

// styles
import './layout.styles.scss';

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
