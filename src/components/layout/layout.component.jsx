import * as React from 'react';
import PropTypes from 'prop-types';

// components
import Header from '../header/header.component';
// import ScrollTop from "../scroll-top/scroll-top.componet";
import Footer from '../footer/footer.component';

// styles
import './layout.styles.scss';

const LayoutEnglish = ({ children }) => (
  <div className="layout">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

// const LayoutSpanish = ({ children }) => (
//   <div className="layout">
//     <HeaderEs />
//     <main>{children}</main>
//     <Footer />
//   </div>
// );

LayoutEnglish.propTypes = {
  children: PropTypes.node.isRequired,
};

// LayoutSpanish.propTypes = {
//   children: PropTypes.node.isRequired,
// };

const Layout = ({ children, pageContext }) => {
  // if (pageContext.layout === 'spanish') {
  //   return <LayoutSpanish children={children} />;
  // }

  return <LayoutEnglish children={children} />;
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
