import React from 'react';

// components
import SectionImageLeft from '../section-image_left/section-image_left.component';
import SectionImageRight from '../section-image_right/section-image_right.component';

// styles
import './service-view.styles.scss';

const ServiceView = ({ service }) => {
  console.log(service.html);

  return (
    <div className="service-view">
      <SectionImageLeft
        imageUrl={service.frontmatter.image}
        sectionHeading={service.frontmatter.heading}
        text={service.frontmatter.description}
      />
      <SectionImageRight 
        imageUrl={service.frontmatter.imageTwo}
        sectionHeading={`${service.frontmatter.subheading}:`}
        html={service.html}
      />
    </div>
  );
};

export default ServiceView;
