import React from 'react';
import { graphql } from 'gatsby';
import { injectIntl } from 'gatsby-plugin-intl';

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
        <CarouselBanner intl={intl} />
        <SectionImageLeftButton
          imageUrl="https://imagizer.imageshack.com/img924/3835/T87MLR.png"
          sectionHeading={intl.formatMessage({ id: 'index_page.sectionHeading_imageLeft' })}
          text={intl.formatMessage({ id: 'index_page.text_imageLeft' })}
          routeName="services/translations"
          linkName={intl.formatMessage({ id: 'learn-more' })}
        />
        <SectionServices intl={intl} />
        <SectionImageRightButton
          imageUrl="https://imagizer.imageshack.com/img922/3227/z1JlCk.png"
          sectionHeading={intl.formatMessage({ id: 'index_page.sectionHeading_imageRight' })}
          text={intl.formatMessage({ id: 'index_page.text_imageRight' })}
          routeName="/services"
          linkName={intl.formatMessage({ id: 'learn-more' })}
        />
      </Container>
      <SectionContact />
    </div>
  </>
);

export default injectIntl(IndexPage);
