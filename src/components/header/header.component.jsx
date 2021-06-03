import React from 'react';

// components
import HeaderTop from './header-top/header-top.component';
import HeaderBottom from './header-bottom/header-bottom.component';

// styles
import './header.styles.scss';

const Header = () => (
  <div className="header" id="top">
    <HeaderTop />
    <HeaderBottom />
  </div>
);

export default Header;
