import * as React from 'react';
import { Link } from 'gatsby';

// components
import LogoIcon from '../../assets/legalpracmatic-logo.svg';

// styles
import './logo.styles.scss';

const Logo = ({ routeName }) => (
  <Link className="logo-container" to={routeName}>
    <LogoIcon className="logo" />
    <h1 className="legal">LEGAL</h1>
    <h1 className="pracmatic">PRACMATIC</h1>
  </Link>
);

export default Logo;
