import React from 'react';
import { Link } from 'gatsby-plugin-intl';

// styles
import './navigation.styles.scss';

const Navigation = ({ routeName, linkName }) => (
  <Link className="navigation-link" to={routeName}>
    {linkName}
  </Link>
);

export default Navigation;
