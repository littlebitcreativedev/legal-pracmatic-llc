import React from 'react';

// styles
import './footer-bottom.styles.scss';

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-bottom">
      <div className="copyright">
        <p>{currentYear} © Legal PracMatic, LLC. All rights reserved.</p>
      </div>
    </div>
  );
};

export default FooterBottom;
