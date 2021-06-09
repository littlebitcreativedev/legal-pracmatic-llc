import React from 'react';

// material ui components
import Grid from '@material-ui/core/Grid';

// components
import Navigation from '../../navigation/navigation.component';
import SocialMedia from '../../social-media-menu/social-media-menu.component';

// styles
import './footer-top.styles.scss';

const FooterTop = ({ intl }) => (
  <Grid container spacing={3} className="footer-top">
    <Grid item xs={12} sm={7} className="footer-item footer-item__one">
      <Navigation routeName="/about-us" linkName={intl.formatMessage({ id: 'about-us' })} />
      <Navigation routeName="/terms-of-use" linkName={intl.formatMessage({ id: 'terms-of-use' })} />
      <Navigation
        routeName="/privacy-policy"
        linkName={intl.formatMessage({ id: 'privacy-policy' })}
      />
      <Navigation routeName="/contact-us" linkName={intl.formatMessage({ id: 'contact-us' })} />
    </Grid>
    <Grid item xs={12} sm={5} className="footer-item footer-item__two">
      <SocialMedia />
    </Grid>
  </Grid>
);

export default FooterTop;
