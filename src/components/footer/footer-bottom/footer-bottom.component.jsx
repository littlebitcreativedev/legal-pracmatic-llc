import React from 'react';

// styles
import './footer-bottom.styles.scss';

const FooterBottom = ({ intl }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-bottom">
      <div className="copyright">
        <p>
          {currentYear} © Legal PracMatic, LLC. {intl.formatMessage({ id: 'footer.all-rights' })}.
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
