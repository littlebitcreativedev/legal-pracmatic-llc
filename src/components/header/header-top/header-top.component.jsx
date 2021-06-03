import * as React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faClock, faEnvelope } from '@fortawesome/free-regular-svg-icons';

// material ui components
import Container from '@material-ui/core/Container';

// components
import Item from './item/item.component';
import ColFlag from '../../../assets/colombia.svg';

// styles
import './header-top.styles.scss';

// icons
const phone = <FontAwesomeIcon icon={faPhone} />;
const envelope = <FontAwesomeIcon icon={faEnvelope} />;
const clock = <FontAwesomeIcon icon={faClock} />;
// const search = <FontAwesomeIcon icon={faSearch} />;
const colFlag = <ColFlag className="flag-icon" />;

const HeaderTop = () => (
  <Container>
    <div className="header-top">
      <div className="header-top_left">
        <Item icon={phone} text="(000) 000 - 0000" />
        <Item icon={envelope} text="contact@legalpracmatic.com" />
        <Item icon={clock} text="Monday - Friday: 8:00am - 5:00pm" />
      </div>
      <div className="header-top_right">
        <Link to="/">
          <Item icon={colFlag} text="Es" />
        </Link>
      </div>
    </div>
  </Container>
);

export default HeaderTop;
