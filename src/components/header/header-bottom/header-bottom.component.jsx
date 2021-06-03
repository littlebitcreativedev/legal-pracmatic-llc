import React, { useState } from 'react';
import { Link } from 'gatsby';

// material ui components
import Container from '@material-ui/core/Container';

// components
import Logo from '../../logo/logo.component';
import CustomButton from '../../custom-button/custom-button.component';
import HeaderTop from '../header-top/header-top.component';

// styles
import './header-bottom.styles.scss';

const accentColor = {
  color: '#4CC9CF',
};

const HeaderBottom = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <div className="header-bottom">
        <div className="header-bottom_left">
          <Logo routeName="/" />
        </div>
        <div className={`header-bottom__right ${toggle ? 'visible' : ''}`}>
          <div className="menu">
            <Link
              className="navigation-link"
              activeStyle={accentColor}
              to="/"
              onClick={handleToggle}
            >
              HOME
            </Link>
            <Link
              className="navigation-link"
              activeStyle={accentColor}
              to="/about-us"
              onClick={handleToggle}
            >
              ABOUT US
            </Link>
            <Link
              className="navigation-link"
              activeStyle={accentColor}
              to="/services"
              onClick={handleToggle}
            >
              SERVICES
            </Link>
            <Link
              className="navigation-link"
              activeStyle={accentColor}
              to="/contact-us"
              onClick={handleToggle}
            >
              CONTACT US
            </Link>
            <CustomButton routeName="contact-us" linkName="GET QUOTE" />
          </div>
          <HeaderTop className="header-top__mobile" />
        </div>
        <div className="hide">
          <div className={`hamburger-menu ${toggle ? 'cross' : ''}`} onClick={handleToggle} onKeyDown={handleToggle}>
            <div className="bars bar-1" />
            <div className="bars bar-2" />
            <div className="bars bar-3" />
            <div className="bars bar-4" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeaderBottom;
