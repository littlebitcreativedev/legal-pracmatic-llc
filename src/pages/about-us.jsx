import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';

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
const AboutPage = ({ location, intl }) => (
  <>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: 'about-us' })} />
    <div className="about-us">
      <Container>
        <PageBanner
          title={intl.formatMessage({ id: 'about-us' })}
          imageUrl="https://i.ibb.co/ykJD8mm/contact-page-banner.jpg"
          altText=""
          location={location}
        />
        <AboutUsIntroduction intl={intl} />
      </Container>
      <CallToAction intl={intl} />
    </div>
  </>
);

export default injectIntl(AboutPage);
