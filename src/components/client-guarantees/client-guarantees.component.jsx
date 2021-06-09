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

const ClientGuarantee = ({ intl }) => (
  <div className="client-guarantee">
    <div className="section-heading">
      <h3 className="heading">{intl.formatMessage({ id: 'client-guarantees.heading' })}:</h3>
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
            <h4>{intl.formatMessage({ id: 'client-guarantees.reliability' })}</h4>
            <p>{intl.formatMessage({ id: 'client-guarantees.reliability_text' })}</p>
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
            <h4>{intl.formatMessage({ id: 'client-guarantees.satisfaction' })}</h4>
            <p>{intl.formatMessage({ id: 'client-guarantees.satisfaction_text' })}</p>
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
            <h4>{intl.formatMessage({ id: 'client-guarantees.security' })}</h4>
            <p>{intl.formatMessage({ id: 'client-guarantees.security_text' })}</p>
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
            <h4>{intl.formatMessage({ id: 'client-guarantees.turnaround' })}</h4>
            <p>{intl.formatMessage({ id: 'client-guarantees.turnaround_text' })}</p>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </div>
);

export default ClientGuarantee;
