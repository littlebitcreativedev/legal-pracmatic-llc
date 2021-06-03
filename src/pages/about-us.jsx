import * as React from 'react';

// material ui components
import Container from '@material-ui/core/Container';

// components
import SEO from '../components/seo/seo.component';
import PageBanner from '../components/page-banner/page-banner.component';
import AboutUsIntroduction from '../components/about-us-introduction/about-us-introduction.component';
import CallToAction from '../components/call-to-action/call-to-action.component';

// styles
import '../components/page-styles/about-us.styles.scss';

// eslint-disable-next-line react/prop-types
const AboutPage = ({ location }) => (
  <>
    <SEO title="About Us" />
    <div className="about-us">
      <Container>
        <PageBanner
          title="About Us"
          imageUrl="https://i.ibb.co/ykJD8mm/contact-page-banner.jpg"
          altText="blonde business woman with glasses talking on cellphone."
          location={location}
        />
        <AboutUsIntroduction />
      </Container>
      <CallToAction />
    </div>
  </>
);

export default AboutPage;
