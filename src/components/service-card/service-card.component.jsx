import React from 'react';
import { Link } from 'gatsby';

// material ui components
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';

// components

// styles
import './service-card.styles.scss';

const ServiceCard = ({ routeName, label, description, icon }) => (
  <Grid item xs={12} md={3} className="service-cards">
    <Link to={routeName}>
      <Card className="card">
        <Icon height={70}>
          <div className="service-icon">{icon}</div>
        </Icon>
        <CardContent>
          <h4>{label}</h4>
          <p>{description}</p>
        </CardContent>
      </Card>
    </Link>
  </Grid>
);

export default ServiceCard;
