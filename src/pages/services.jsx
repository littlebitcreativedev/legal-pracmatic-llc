/* eslint-disable react/prop-types */
import * as React from 'react';

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
const ServicesPage = ({ location }) => (
  <>
    <SEO title="Services | Legal Pracmatic, LLC" />
    <div className="services">
      <PageBanner
        title="Our Services"
        imageUrl="https://i.ibb.co/ykJD8mm/contact-page-banner.jpg"
        altText="blonde business woman with glasses talking on cellphone."
        location={location}
      />
      <Container>
        <ServiceIntroduction />
        <ServiceDescriptions />
        <ClientGuarantee />
      </Container>
      <SectionContact />
      <CallToAction />
    </div>
  </>
);

export default ServicesPage;
