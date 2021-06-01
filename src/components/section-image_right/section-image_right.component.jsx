import React from 'react';

// components

// styles

import './section-image_right.styles.scss';

const SectionImageRight = ({ imageUrl, sectionHeading, text, html }) => (
  <div className="section-image_right">
    <div className="section-content stack">
      <div className="inner-container">
        <div className="section-text">
          <h2 className="section-heading">{sectionHeading}</h2>
          <p dangerouslySetInnerHTML={{ __html: html }}>{text}</p>
        </div>
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

export default SectionImageRight;
