import React from 'react';

// material ui components
import Grid from '@material-ui/core/Grid';

// components
import Logo from '../../logo/logo.component';
import Navigation from '../../navigation/navigation.component';

// styles
import './footer-middle.styles.scss';

const FooterMiddle = () => (
  <Grid container className="footer-middle" spacing={3}>
    <Grid item xs={12} sm={6} md={3} className="footer-item footer-item__one">
      <div>
        <h4>Contact</h4>
        <div className="content">
          <div className="item">
            <span className="title">Hours:</span>
            <span>Monday - Friday 8:00am - 5:00pm</span>
          </div>
          <div className="item">
            <span className="title">Phone:</span>
            <span>(000) 000 - 0000</span>
          </div>
          <div className="item">
            <span className="title">Email:</span>
            <span>contact@legalpracmatic.com</span>
          </div>
        </div>
      </div>
    </Grid>
    <Grid item xs={12} sm={6} md={4} className="footer-item footer-item__two">
      <div className="footer-navigation">
        <h4>About</h4>
        <div className="links">
          <Navigation routeName="/services" linkName="Services" />
          <Navigation routeName="/about-us" linkName="Our Company" />
          <Navigation routeName="/contact-us" linkName="Location" />
        </div>
      </div>
      <div className="footer-navigation">
        <h4>Services</h4>
        <div className="links">
          <Navigation routeName="/services/translations" linkName="Translations" />
          <Navigation routeName="/services/notary-public" linkName="Notary Public" />
          <Navigation routeName="/services/conciliations" linkName="Conciliations" />
        </div>
      </div>
    </Grid>
    <Grid item xs={12} md={4} className="footer-item footer-item__three">
      <div>
        <Logo routeName="/" />
        <p>
          Ut cum tenetur deserunt voluptatem sit cumque natus. Unde facere aperiam repellat fugit
          ipsum voluptatem quasi doloremque. Quam ut ea eos.
        </p>
      </div>
    </Grid>
  </Grid>
);

export default FooterMiddle;
