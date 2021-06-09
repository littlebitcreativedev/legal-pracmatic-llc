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

// styles
import '../../components/page-styles/single-service.styles.scss';
import '../../components/section-image_left-button/section-image_left-button.styles.scss';
import '../../components/section-image_right-button/section-image_right-button.styles.scss';

const TranslationsPage = ({ location }) => {
  const intl = useIntl();

  return (
    <>
      <SEO lang={intl.locale} title={intl.formatMessage({ id: 'translations' })} />
      <div className="service-views">
        <Container>
          <PageBanner
            title={intl.formatMessage({ id: 'translations' })}
            imageUrl="https://i.ibb.co/ykJD8mm/contact-page-banner.jpg"
            altText=""
            location={location}
          />
          <div className="service-view">
            <div className="section-image_left-button">
              <div
                className="image"
                style={{
                  backgroundImage: `url('https://i.ibb.co/z5XW5kX/woman-typing-laptop.png')`,
                }}
              />
              <div className="section-content">
                <div className="inner-container">
                  <div className="section-text">
                    <h2 className="section-heading">Our Translation Services</h2>
                    <p>
                      Our translators' main focus is to deliver top quality work ensuring that the
                      translated content communicates the original meaning, format and tone. We use
                      the best tools and references to make sure that the translations we provide
                      are appropriate and embody the target language's idiosyncrasies.
                    </p>
                    <p>
                      The process is very simple and practical. You send us the text to be
                      translated by email and we translate it to the target language while
                      emphasizing the correct terminolgy and grammar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-image_right-button">
              <div className="section-content stack">
                <div className="inner-container">
                  <div className="section-text">
                    <h3 className="section-heading">Our translators</h3>
                    <ul className="section-list">
                      <li>Ensure that translated text conveys original meaning and tone</li>
                      <li>Proofread translated text for grammar, spelling and punctuation</li>
                      <li>Provide unlimited revisions until you are happy and satisfied</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="image stack"
                style={{
                  backgroundImage: `url('https://i.ibb.co/5jnwvBS/guy-laptop-books.png')`,
                }}
              />
            </div>
          </div>
          <ClientGuarantee intl={intl} />
        </Container>
        <SectionContact intl={intl} />
        <CallToAction intl={intl} />
      </div>
    </>
  );
};

export default TranslationsPage;
