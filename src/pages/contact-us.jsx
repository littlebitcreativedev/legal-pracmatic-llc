import * as React from 'react';

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

const ContactPage = ({ location }) => (
  <>
    <SEO title="Contact Us" />
    <div className="contact-us">
      <PageBanner
        title="Contact Us"
        imageUrl="https://i.ibb.co/ykJD8mm/contact-page-banner.jpg"
        altText="blonde business woman with glasses talking on cellphone."
        location={location}
      />
      <Container className="section-contact__form">
        <Grid container spacing={7}>
          <Grid item xs={12} md={6}>
            <ContactForm />
          </Grid>
          <Grid item sx={12} md={6}>
            <div className="section-content">
              <h2>Ready to get started?</h2>
              <div>
                <div className="contact-details">
                  <span className="bold">Email:</span>
                  <span>contact@legalpracmatic.com</span>
                </div>
                <div className="contact-details">
                  <span className="bold">Phone:</span>
                  <span>+ (000) 000 - 0000</span>
                </div>
                <div className="contact-details">
                  <span className="bold">Whatsapp:</span>
                  <span>+ (000) 000 - 0000</span>
                </div>
                <p>
                  Give us a call, a text, or an email anytime. We endeavour to answer all enquiries
                  within 24hrs on business days.
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <ContactInformation />
    </div>
  </>
);

export default ContactPage;
