import React from 'react';

// components
import CustomButton from '../custom-button/custom-button.component';

// styles

import './section-image_right-button.styles.scss';

const SectionImageRightButton = ({ imageUrl, sectionHeading, text, routeName, linkName }) => (
  <div className="section-image_right-button">
    <div className="section-content stack">
      <div className="inner-container">
        <div className="section-text">
          <h2 className="section-heading">{sectionHeading}</h2>
          <p>{text}</p>
        </div>
        <CustomButton routeName={routeName} linkName={linkName} />
      </div>
    </div>
    <div
      className="image stack"
      style={{
        backgroundImage: `url('${imageUrl}')`,
      }}
    />
  </div>
);

export default SectionImageRightButton;
