import React from 'react';

// material ui components
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

// components
import FooterTop from './footer-top/footer-top.component';
import FooterMiddle from './footer-middle/footer-middle.component';
import FooterBottom from './footer-bottom/footer-bottom.component';

// styles
import './footer.styles.scss';

const Footer = () => (
  <div className="footer">
    <Container>
      <FooterTop />
      <Divider />
      <FooterMiddle />
    </Container>
    <Divider />
    <FooterBottom />
  </div>
);

export default Footer;
