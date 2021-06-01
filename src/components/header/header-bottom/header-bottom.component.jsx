import React, { useState } from 'react';
import { Link } from 'gatsby';

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

  const handleToggle = (event) => {
    setToggle(!toggle);
  };

  return (
    <div className={`header-bottom ${toggle ? 'fixed-header' : ''}`}>
      <Logo routeName="/" />
      <div className={`header-bottom__right ${toggle ? 'visible' : ''}`}>
        <div className="menu">
          <Link className="navigation-link" activeStyle={accentColor} to="/" onClick={handleToggle}>
            HOME
          </Link>
          <Link className="navigation-link" activeStyle={accentColor} to="/about-us" onClick={handleToggle}>
            ABOUT US
          </Link>
          <Link className="navigation-link" activeStyle={accentColor} to="/services" onClick={handleToggle}>
            SERVICES
          </Link>
          <Link className="navigation-link" activeStyle={accentColor} to="/contact-us" onClick={handleToggle}>
            CONTACT US
          </Link>
          <CustomButton routeName="contact-us" linkName="GET QUOTE" />
        </div>
        <HeaderTop className="header-top__mobile" />
      </div>
      <div className="hamburger-menu__container">
        <div
          role="button"
          tabIndex={0}
          className={`hamburger-menu ${toggle ? 'cross' : ''}`}
          onClick={handleToggle}
          onKeyDown={handleToggle}
        >
          <span className="bar-1" />
          <span className="bar-2" />
          <span className="bar-3" />
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
