import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';

// styles
import '../section-image_left-button/section-image_left-button.styles.scss';

const UnderConstruction = ({ intl }) => (
  <div className="section-image_left-button">
    <div
      className="image"
      style={{
        backgroundImage: `url('https://imagizer.imageshack.com/img922/6451/0jLGgR.png')`,
      }}
    />
    <div className="section-content">
      <div className="inner-container">
        <div className="section-text">
          <h2 className="section-heading">
            {intl.formatMessage({ id: 'under-construction.heading' })}
          </h2>
          <h4>
          {intl.formatMessage({ id: 'under-construction.subheading' })}
          </h4>
        </div>
      </div>
    </div>
  </div>
);

export default injectIntl(UnderConstruction);
