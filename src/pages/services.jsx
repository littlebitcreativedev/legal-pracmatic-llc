/* eslint-disable react/prop-types */
import * as React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';

// material ui components
import Container from '@material-ui/core/Container';

// components
import SEO from '../components/seo/seo.component';
import PageBanner from '../components/page-banner/page-banner.component';
import ServiceIntroduction from '../components/service-introduction/service-introduction.component';
import ServiceDescriptions from '../components/services-descriptions/services-descriptions.component';
import SectionContact from '../components/section-contact/section-contact.component';
import CallToAction from '../components/call-to-action/call-to-action.component';
import ClientGuarantee from '../components/client-guarantees/client-guarantees.component';

// styles
import '../components/page-styles/services.styles.scss';

// eslint-disable-next-line react/prop-types
const ServicesPage = ({ location, intl }) => (
  <>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: 'services'})} />
    <div className="services">
      <Container>
        <PageBanner
          title={intl.formatMessage({ id: 'services'})}
          imageUrl="https://i.ibb.co/ykJD8mm/contact-page-banner.jpg"
          altText=""
          location={location}
        />
        <ServiceIntroduction intl={intl} />
        <ServiceDescriptions intl={intl} />
        <ClientGuarantee intl={intl} />
      </Container>
      <SectionContact />
      <CallToAction intl={intl} />
    </div>
  </>
);

export default injectIntl(ServicesPage);
