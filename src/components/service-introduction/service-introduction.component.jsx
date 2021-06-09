import React from 'react';

// material ui components
import Grid from '@material-ui/core/Grid';

// components

// styles
import './service-introduction.styles.scss';

const ServiceIntroduction = ({ intl }) => (
  <div className="section-introduction">
    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        <h2>{intl.formatMessage({ id: 'service_page.intro_heading' })}</h2>
      </Grid>
      <Grid item xs={12} md={4}>
        <p>{intl.formatMessage({ id: 'service_page.intro_text-one' })}</p>
        <p>{intl.formatMessage({ id: 'service_page.intro_text-two' })}</p>
        <p>{intl.formatMessage({ id: 'service_page.intro_text-three' })}</p>
      </Grid>
      <Grid item xs={12} md={4}>
        <p>{intl.formatMessage({ id: 'service_page.intro_text-four' })}</p>
        <p>{intl.formatMessage({ id: 'service_page.intro_text-five' })}</p>
      </Grid>
    </Grid>
  </div>
);

export default ServiceIntroduction;
