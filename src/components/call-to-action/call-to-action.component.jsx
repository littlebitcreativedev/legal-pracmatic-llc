import React from 'react';

// material ui components
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// components
import CustomButton from '../custom-button/custom-button.component';

// styles
import './call-to-action.styles.scss';

const CallToAction = ({ intl }) => (
  <div className="call-to-action">
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <h2>{intl.formatMessage({ id: 'call-to-action.sectionHeading' })}</h2>
          <h4>{intl.formatMessage({ id: 'call-to-action.sectionSubHeading' })}</h4>
        </Grid>
        <Grid item xs={12} md={4} className="buttons">
          <div>
            <CustomButton linkName="Whatsapp" routeName="https://wa.me/573187531805" />
          </div>
          <div>
            <CustomButton
              linkName={intl.formatMessage({ id: 'call-to-action.call-now' })}
              routeName="tel:9703066650"
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  </div>
);

export default CallToAction;
