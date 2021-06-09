import React from 'react';

// components
import CustomButton from '../custom-button/custom-button.component';

// styles
import './section-image_left-button.styles.scss';

const SectionImageLeftButtton = ({ imageUrl, sectionHeading, text, routeName, linkName }) => (
  <div className="section-image_left-button">
    <div
      className="image"
      style={{
        backgroundImage: `url('${imageUrl}')`,
      }}
    />
    <div className="section-content">
      <div className="inner-container">
        <div className="section-text">
          <h2 className="section-heading">{sectionHeading}</h2>
          <p>{text}</p>
        </div>
        <CustomButton routeName={routeName} linkName={linkName} />
      </div>
    </div>
  </div>
);

export default SectionImageLeftButtton;
