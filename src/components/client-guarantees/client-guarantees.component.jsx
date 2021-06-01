import React from 'react';

// material ui components
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';

// components

// styles
import './client-guarantees.styles.scss';

// icons
import AwardIcon from '../../assets/award.svg';
import ClockIcon from '../../assets/clock.svg';
import PaymentIcon from '../../assets/payment.svg';
import SecureDocumentIcon from '../../assets/secure-document.svg';

const ClientGuarantee = () => (
  <div className="client-guarantee">
    <div className="section-heading">
      <h3 className="heading">We provide our clients:</h3>
    </div>
    <Grid container spacing={3}>
      <Grid item xs={12} md={3} className="card-container">
        <Card className="card">
          <Icon height={70}>
            <div className="icon">
              <PaymentIcon />
            </div>
          </Icon>
          <CardContent>
            <h4>Reliability</h4>
            <p>Complete transparancy. No hidden fees or information about our services.</p>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={3} className="card-container">
        <Card className="card">
          <Icon height={70}>
            <div className="icon">
              <AwardIcon />
            </div>
          </Icon>
          <CardContent>
            <h4>100% Satisfaction</h4>
            <p>
              We are not satisfied until you are satisfied. We work with you to guarantee 100%
              satisfaction.
            </p>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={3} className="card-container">
        <Card className="card">
          <Icon height={70}>
            <div className="icon">
              <SecureDocumentIcon />
            </div>
          </Icon>
          <CardContent>
            <h4>100% Security</h4>
            <p>
              We ensure that all personal and confidential information does not reach anyone but the
              intended receiver.
            </p>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={3} className="card-container">
        <Card className="card">
          <Icon height={70}>
            <div className="icon">
              <ClockIcon />
            </div>
          </Icon>
          <CardContent>
            <h4>Fast Turnaround</h4>
            <p>
              We aim to deliver fast and quality work. Turnaround times depend on complexity of the
              order.
            </p>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </div>
);

export default ClientGuarantee;
