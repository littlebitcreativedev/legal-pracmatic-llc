import React from 'react';
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl';

// material ui components
import Container from '@material-ui/core/Container';

// components
import SEO from '../components/seo/seo.component';
import CarouselBanner from '../components/carousel-banner/carousel-banner.component';
import SectionImageLeftButton from '../components/section-image_left-button/section-image_left-button.component';
import SectionImageRightButton from '../components/section-image_right-button/section-image_right-button.component';
import SectionServices from '../components/section-services/section-services.component';
import SectionContact from '../components/section-contact/section-contact.component';

// styles
import '../components/page-styles/global.styles.scss';
import '../index.scss';

// markup
const IndexPage = ({ intl }) => (
  <>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: 'home' })} />
    <div className="homepage">
      <Container>
        <CarouselBanner />
        <SectionImageLeftButton
          imageUrl="https://i.ibb.co/W0n0c2R/woman-laptop-working.png"
          sectionHeading="Practical & Simple Translations"
          text="We are 100% commited in providing our clients with English and 
            Spanish translation solutions in a practical and simple way. Get your 
            legal documents and private projects translated by our team of 
            dedicated translators, from webpages, books, to simple statements and 
            much more."
          routeName="/services/translations"
        />
        <SectionServices />
        <SectionImageRightButton
          imageUrl="https://i.ibb.co/4RrY0mc/remote-work-connect.png"
          sectionHeading="In-person & remote legal services"
          text="Legal Pracmatic, LLC also offers remote and in-person notarization 
      services for our clients who reside in the state of Colorado. More than 
      that, we provide virtual conciliation services and preparation of documents 
      relating to a series of legal matters in the country of Colombia."
          routeName="/services"
          linkName="Learn more"
        />
      </Container>

      <SectionContact />
    </div>
  </>
);

export default injectIntl(IndexPage);
