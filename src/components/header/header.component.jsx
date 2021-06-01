import * as React from 'react';

// material ui components
import Container from '@material-ui/core/Container';

// components
import HeaderTop from './header-top/header-top.component';
import HeaderBottom from './header-bottom/header-bottom.component';

// styles
import './header.styles.scss';

const Header = () => (
  <Container>
    <div className="header" id="top">
      <HeaderTop />
      <HeaderBottom />
    </div>
  </Container>
);

export default Header;
