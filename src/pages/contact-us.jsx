import React from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';

// material ui components
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// components
import SEO from '../components/seo/seo.component';
import PageBanner from '../components/page-banner/page-banner.component';
import ContactForm from '../components/contact-form/contact-form.component';
import ContactInformation from '../components/contact-information/contact-information.component';

// styles
import '../components/page-styles/contac-us.styles.scss';

const ContactPage = ({ location }) => {
  const intl = useIntl();

  return (
    <>
      <SEO lang={intl.locale} title={intl.formatMessage({ id: 'contact-us' })} />
      <div className="contact-us">
        <Container>
          <PageBanner
            title={intl.formatMessage({ id: 'contact-us' })}
            imageUrl="https://i.ibb.co/ykJD8mm/contact-page-banner.jpg"
            altText=""
            location={location}
          />
          <div className="section-contact">
            <Grid className="container">
              <Grid item xs={12} md={5}>
                <ContactForm />
              </Grid>
              <Grid item sx={12} md={5}>
                <div className="section-content">
                  <h2>
                    <FormattedMessage id="heading_contactPage" />
                  </h2>
                  <div>
                    <div className="contact-details">
                      <span className="bold">
                        <FormattedMessage id="email_contactDetails" />
                      </span>
                      <span>contact@legalpracmatic.com</span>
                    </div>
                    <div className="contact-details">
                      <span className="bold">
                        <FormattedMessage id="phone_contactDetials" />
                      </span>
                      <span>+ (000) 000 - 0000</span>
                    </div>
                    <div className="contact-details">
                      <span className="bold">Whatsapp:</span>
                      <span>+ (000) 000 - 0000</span>
                    </div>
                    <p>
                      <FormattedMessage id="message_contactDetails" />
                    </p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
        <ContactInformation />
      </div>
    </>
  );
};

export default ContactPage;
