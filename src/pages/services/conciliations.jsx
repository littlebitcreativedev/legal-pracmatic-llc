import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

// material ui components
import Container from '@material-ui/core/Container';

// components
import SEO from '../../components/seo/seo.component';
import PageBanner from '../../components/page-banner/page-banner.component';
import ClientGuarantee from '../../components/client-guarantees/client-guarantees.component';
import SectionContact from '../../components/section-contact/section-contact.component';
import CallToAction from '../../components/call-to-action/call-to-action.component';
import UnderConstruction from '../../components/under-construction/under-construction.component';

// styles
import '../../components/page-styles/single-service.styles.scss';
import '../../components/section-image_left-button/section-image_left-button.styles.scss';
import '../../components/section-image_right-button/section-image_right-button.styles.scss';

const ConciliationsPage = ({ location }) => {
  const intl = useIntl();

  return (
    <>
      <SEO lang={intl.locale} title={intl.formatMessage({ id: 'conciliations' })} />
      <div className="service-views">
        <Container>
          <PageBanner
            title={intl.formatMessage({ id: 'conciliations' })}
            imageUrl="https://i.ibb.co/ykJD8mm/contact-page-banner.jpg"
            altText=""
            location={location}
          />
          <UnderConstruction />
          <ClientGuarantee intl={intl} />
        </Container>
        <SectionContact intl={intl} />
        <CallToAction intl={intl} />
      </div>
    </>
  );
};

export default ConciliationsPage;
