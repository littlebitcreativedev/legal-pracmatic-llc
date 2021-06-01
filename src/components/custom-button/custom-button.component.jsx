import React from 'react';
import { Link } from 'gatsby';

// material ui components
import Button from '@material-ui/core/Button';

// styles
import './custom-button.styles.scss';

// eslint-disable-next-line react/prop-types
const CustomButton = ({ routeName, linkName }) => (
  <Button
    className="custom-button"
    disableElevation
    variant="contained"
    size="large"
    component={Link}
    to={routeName}
  >
    {linkName}
  </Button>
);

export default CustomButton;
