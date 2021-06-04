import { graphql } from 'gatsby';
import React from 'react';

// material ui components
import Container from '@material-ui/core/Container';

// components
import SEO from '../components/seo/seo.component';
import PageBanner from '../components/page-banner/page-banner.component';
import ServiceView from '../components/service-view/service-view.component';
import ClientGuarantee from '../components/client-guarantees/client-guarantees.component';
import SectionContact from '../components/section-contact/section-contact.component';
import CallToAction from '../components/call-to-action/call-to-action.component';

// styles
import './services-views.styles.scss';

const ServicesTemplate = ({ data, location }) => (
  <>
    <SEO title={data.markdownRemark.frontmatter.title} />
    <div className="service-template">
      <Container>
        <PageBanner
          title={data.markdownRemark.frontmatter.title}
          imageUrl="https://i.ibb.co/ykJD8mm/contact-page-banner.jpg"
          altText="blonde business woman with glasses talking on cellphone."
          location={location}
        />
        <ServiceView service={data.markdownRemark} />
        <ClientGuarantee />
      </Container>
      <SectionContact />
      <CallToAction />
    </div>
  </>
);

export default ServicesTemplate;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        heading
        description
        subheading
        slug
        image
        imageTwo
      }
    }
  }
`;
