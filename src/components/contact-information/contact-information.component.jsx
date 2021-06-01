import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// material ui components
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

// components

// styles
import './contact-information.styles.scss';

// icons
const phone = <FontAwesomeIcon icon={faPhone} />;
const envelope = <FontAwesomeIcon icon={faEnvelope} />;
const whatsapp = <FontAwesomeIcon icon={faWhatsapp} />;
const marker = <FontAwesomeIcon icon={faMapMarkerAlt} />;

const ContactInformation = () => (
  <div
    className="contact-information"
    style={{ backgroundImage: `url("https://i.ibb.co/59cVmdy/street-map.png")` }}
    alt="areal view of highway ramps."
  >
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card className="contact-card">
            <CardContent className="contact-card__content">
              <h4>Contact Details</h4>
              <div>
                <span className="title">{marker}</span>
                <span className="data">Denver, Colorado USA</span>
              </div>
              <div>
                <span className="title">{phone}</span>
                <span className="data">+ (000) 000 - 0000</span>
              </div>
              <div>
                <span className="title">{whatsapp}</span>
                <span className="data">+ (000) 000 - 0000</span>
              </div>
              <div>
                <span className="title">{envelope}</span>
                <span className="data">contact@legalpracmatic.com</span>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className="contact-card">
            <CardContent className="contact-card__content">
              <h4>Opening Hours</h4>
              <div>
                <span className="title">Monday - Friday:</span>
                <span className="data">8:00am - 5:00pm</span>
              </div>
              <div>
                <span className="title">Saturday:</span>
                <span className="data">Closed</span>
              </div>
              <div>
                <span className="title">Sunday:</span>
                <span className="data">Closed</span>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </div>
);

export default ContactInformation;
