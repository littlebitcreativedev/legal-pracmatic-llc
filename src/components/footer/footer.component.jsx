import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';

// material ui components
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

// components
import FooterTop from './footer-top/footer-top.component';
import FooterMiddle from './footer-middle/footer-middle.component';
import FooterBottom from './footer-bottom/footer-bottom.component';

// styles
import './footer.styles.scss';

const Footer = ({ intl }) => (
  <div className="footer">
    <Container>
      <FooterTop intl={intl} />
      <Divider />
      <FooterMiddle intl={intl} />
    </Container>
    <Divider />
    <FooterBottom intl={intl} />
  </div>
);

export default injectIntl(Footer);
