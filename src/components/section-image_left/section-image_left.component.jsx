import React from 'react';

// components

// styles
import './section-image_left.styles.scss';

const SectionImageLeft = ({ imageUrl, sectionHeading, text }) => (
  <div className="section-image_left">
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
      </div>
    </div>
  </div>
);

export default SectionImageLeft;
