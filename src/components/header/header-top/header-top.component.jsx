import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faClock, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { injectIntl } from 'gatsby-plugin-intl';

// material ui components
import Container from '@material-ui/core/Container';

// components
import Item from './item/item.component';
import Language from '../../language/language.component';

// styles
import './header-top.styles.scss';

// icons
const phone = <FontAwesomeIcon icon={faPhone} />;
const envelope = <FontAwesomeIcon icon={faEnvelope} />;
const clock = <FontAwesomeIcon icon={faClock} />;
const globe = <FontAwesomeIcon icon={faGlobe} />;

const HeaderTop = ({ intl }) => (
  <Container>
    <div className="header-top">
      <div className="header-top_left">
        <Item icon={phone} text="+1 (970) 306 - 6650" />
        <Item icon={envelope} text="contact@legalpracmatic.com" />
        <Item
          icon={clock}
          text={`${intl.formatMessage({ id: 'monday_friday' })}: 9:00am - 5:00pm`}
        />
      </div>
      <div className="header-top_right">
        <Language icon={globe} />
      </div>
    </div>
  </Container>
);

export default injectIntl(HeaderTop);
