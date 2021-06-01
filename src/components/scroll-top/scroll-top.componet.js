import * as React from 'react';
// import GatsbyLink from "gatsby-link";
// import { genericHashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

// components

// styles
import './scroll-top.styles.scss';

// icons
const angleUp = <FontAwesomeIcon icon={faAngleUp} />;

// const HashLink = genericHashLink(GatsbyLink);

const ScrollTop = ({ location }) => {
  const path = location.pathname;

  return <div className="scroll-top" />;
};

export default ScrollTop;
