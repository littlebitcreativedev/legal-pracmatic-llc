import * as React from 'react';

// compoents
import SEO from '../components/seo/seo.component';
import SectionImageRight from '../components/section-image_right/section-image_right.component';

// styles
import '../components/page-styles/404.styles.scss';

// markup
const NotFoundPage = () => (
  <>
    <div className="page-not-found">
      <SEO title="404 Error" />
      <SectionImageRight
        imageUrl="https://i.ibb.co/0YZ4wNS/error-page-image.jpg"
        sectionHeading="404 Not Found:"
        text={`Oh, No! Something's definitely off!`}
        routeName="/"
        linkName="HOME"
      />
    </div>
  </>
);

export default NotFoundPage;
