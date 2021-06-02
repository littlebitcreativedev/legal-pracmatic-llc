import * as React from 'react';

// material ui components
import Container from '@material-ui/core/Container';

// compoents
import SEO from '../components/seo/seo.component';
import SectionImageRightButton from '../components/section-image_right-button/section-image_right-button.component';

// styles
import '../components/page-styles/404.styles.scss';

// markup
const NotFoundPage = () => (
  <>
    <div className="page-not-found">
      <SEO title="404 Error" />
      <Container>
        <SectionImageRightButton
          imageUrl="https://i.ibb.co/t4hgMcV/404.png"
          sectionHeading="404 Not Found:"
          text={`Oh, No! Something's definitely off!`}
          routeName="/"
          linkName="HOME"
        />
      </Container>
    </div>
  </>
);

export default NotFoundPage;
