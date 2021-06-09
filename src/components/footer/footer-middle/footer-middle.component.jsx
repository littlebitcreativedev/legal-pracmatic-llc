import React from 'react';

// material ui components
import Grid from '@material-ui/core/Grid';

// components
import Logo from '../../logo/logo.component';
import Navigation from '../../navigation/navigation.component';

// styles
import './footer-middle.styles.scss';

const FooterMiddle = ({ intl }) => (
  <Grid container className="footer-middle" spacing={3}>
    <Grid item xs={12} sm={6} md={3} className="footer-item footer-item__one">
      <div>
        <h4>{intl.formatMessage({ id: 'footer.contact_footer' })}</h4>
        <div className="content">
          <div className="item">
            <span className="title">Hours:</span>
            <span>{intl.formatMessage({ id: 'monday_friday' })} 8:00am - 5:00pm</span>
          </div>
          <div className="item">
            <span className="title">{intl.formatMessage({ id: 'phone_contactDetails' })}</span>
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
        <h4>{intl.formatMessage({ id: 'footer.about_footer' })}</h4>
        <div className="links">
          <Navigation routeName="/services" linkName={intl.formatMessage({ id: 'services' })} />
          <Navigation
            routeName="/about-us"
            linkName={intl.formatMessage({ id: 'footer.company' })}
          />
          <Navigation
            routeName="/contact-us"
            linkName={intl.formatMessage({ id: 'footer.location' })}
          />
        </div>
      </div>
      <div className="footer-navigation">
        <h4>{intl.formatMessage({ id: 'services' })}</h4>
        <div className="links">
          <Navigation
            routeName="/services/translations"
            linkName={intl.formatMessage({ id: 'translations' })}
          />
          <Navigation
            routeName="/services/notary-public"
            linkName={intl.formatMessage({ id: 'notary-public' })}
          />
          <Navigation
            routeName="/services/conciliations"
            linkName={intl.formatMessage({ id: 'conciliations' })}
          />
        </div>
      </div>
    </Grid>
    <Grid item xs={12} md={4} className="footer-item footer-item__three">
      <div>
        <Logo routeName="/" />
        <p>{intl.formatMessage({ id: 'footer.company-description' })}</p>
      </div>
    </Grid>
  </Grid>
);

export default FooterMiddle;
