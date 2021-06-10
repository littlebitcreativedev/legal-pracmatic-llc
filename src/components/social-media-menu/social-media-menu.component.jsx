import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

// styles
import './social-media-menu.styles.scss';

// icons
const facebook = <FontAwesomeIcon icon={faFacebook} />;
const whatsapp = <FontAwesomeIcon icon={faWhatsapp} />;
const linkedIn = <FontAwesomeIcon icon={faLinkedin} />;
const twitter = <FontAwesomeIcon icon={faTwitter} />;

const SocialMedia = () => (
  <div className="social-media">
    <a href="https://wa.me/573187531805" target="_blank" rel="noreferrer">
      <span className="icon">{whatsapp}</span>
    </a>
    <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
      <span className="icon">{linkedIn}</span>
    </a>
    <a href="https://www.facebook.com/Legal-Pracmatic-LLC-107354151578818" target="_blank" rel="noreferrer">
      <span className="icon">{facebook}</span>
    </a>
    <a href="https://twitter.com/legalpracmatic" target="_blank" rel="noreferrer">
      <span className="icon">{twitter}</span>
    </a>
  </div>
);

export default SocialMedia;
