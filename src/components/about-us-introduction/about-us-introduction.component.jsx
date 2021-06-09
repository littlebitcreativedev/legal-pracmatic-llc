import React from 'react';

// material ui components
import Grid from '@material-ui/core/Grid';

// components

// styles
import './about-us-introduction.styles.scss';

const AboutUsIntroduction = ({ intl }) => (
  <div className="section-introduction">
    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        <h2>{intl.formatMessage({ id: 'about_page.intro_heading' })}</h2>
      </Grid>
      <Grid item xs={12} md={4}>
        <p>{intl.formatMessage({ id: 'about_page.intro_text-one' })}</p>
        <p>{intl.formatMessage({ id: 'about_page.intro_text-two' })}</p>
      </Grid>
      <Grid item xs={12} md={4}>
        <p>{intl.formatMessage({ id: 'about_page.intro_text-three' })}</p>
        <p>{intl.formatMessage({ id: 'about_page.intro_text-four' })}</p>
      </Grid>
    </Grid>
  </div>
);

export default AboutUsIntroduction;
