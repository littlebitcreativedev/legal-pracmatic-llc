import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';

// material ui components
import Container from '@material-ui/core/Container';

// compoents
import SEO from '../components/seo/seo.component';
import SectionImageLeftButton from '../components/section-image_left-button/section-image_left-button.component';

// styles

const Success = ({ intl }) => (
  <>
    <div className="thank-you-page">
      <SEO lang={intl.locale} title={intl.formatMessage({ id: 'thank-you.heading' })} />
      <Container>
        <SectionImageLeftButton
          imageUrl="https://i.ibb.co/kgg9Cwd/guy-laptop-books-reflect.png"
          sectionHeading={intl.formatMessage({ id: 'thank-you.heading' })}
          text={intl.formatMessage({ id: 'thank-you.subheading' })}
          routeName="/"
          linkName={intl.formatMessage({ id: 'home' })}
        />
      </Container>
    </div>
  </>
);

export default injectIntl(Success);
