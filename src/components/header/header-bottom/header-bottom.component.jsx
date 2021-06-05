import React, { useState } from 'react';
import { Link, useIntl, FormattedMessage } from 'gatsby-plugin-intl';

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
  const intl = useIntl();
  const locale = intl.locale !== 'en' ? `/${intl.locale}` : '';

  console.log(toggle);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <div className="header-bottom">
        <div className="header-bottom_left">
          <Logo routeName={`${locale}/`} />
        </div>
        <div className={`header-bottom__right ${toggle ? 'visible' : ''}`}>
          <div className="menu">
            <Link
              className="navigation-link"
              activeStyle={accentColor}
              to="/"
              onClick={handleToggle}
            >
              {intl.formatMessage({ id: 'home' }).toUpperCase()}
            </Link>
            <Link
              className="navigation-link"
              activeStyle={accentColor}
              to="/about-us"
              onClick={handleToggle}
            >
              {intl.formatMessage({ id: 'about-us' }).toUpperCase()}
            </Link>
            <Link
              className="navigation-link"
              activeStyle={accentColor}
              to="/services"
              onClick={handleToggle}
            >
              {intl.formatMessage({ id: 'services' }).toUpperCase()}
            </Link>
            <Link
              className="navigation-link"
              activeStyle={accentColor}
              to="/contact-us"
              onClick={handleToggle}
            >
              {intl.formatMessage({ id: 'contact-us' }).toUpperCase()}
            </Link>
            <CustomButton
              routeName={`${locale}/contact-us`}
              linkName={intl.formatMessage({ id: 'get-quote' })}
            />
          </div>
          <HeaderTop className="header-top__mobile" />
        </div>
        <div className="hide">
          <div
            className={`hamburger-menu ${toggle ? 'cross' : ''}`}
            onClick={handleToggle}
            onKeyDown={handleToggle}
          >
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
