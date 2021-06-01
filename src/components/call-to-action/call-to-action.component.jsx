import React from 'react';

// material ui components
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// components
import CustomButton from '../custom-button/custom-button.component';

// styles
import './call-to-action.styles.scss';

const CallToAction = () => (
  <div className="call-to-action">
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <h2>In need of our services? Let's talk!</h2>
          <h4>Give us a call or text and we'll get back to you within 24hrs.</h4>
        </Grid>
        <Grid item xs={12} md={4} className="buttons">
          <div><CustomButton linkName="Whatsapp" routeName="/" /></div>
          <div><CustomButton linkName="Call Now" routeName="/" /></div>
        </Grid>
      </Grid>
    </Container>
  </div>
);

export default CallToAction;
