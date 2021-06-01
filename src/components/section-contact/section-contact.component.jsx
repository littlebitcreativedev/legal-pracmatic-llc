import React, { useState } from 'react';
import { navigate } from 'gatsby-link';
import emailjs from 'emailjs-com';

// material ui components
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// components

// styles
import './section-contact.styles.scss';

const SectionContact = () => {
  const [state, setState] = useState({});

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm('service_qwtzeqo', 'template_1tbmm5q', event.target, 'user_FdSyEBe7HOJF5AqbK6tmU')
      .then(
        (result) => {
          navigate(event.target.getAttribute('action'));
          // eslint-disable-next-line no-console
          console.log(result.text);
        },
        (error) => {
          // eslint-disable-next-line no-alert
          alert(error.text);
        }
      );
  };

  return (
    <div
      className="section-contact"
      style={{
        backgroundImage: `url('https://i.ibb.co/HqKQnn2/contact-banner.png')`,
      }}
    >
      <Container>
        <Grid container spacing={7}>
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit} action="/thank-you/" className="contact-form">
              <input type="hidden" name="contact_number" />
              <Grid item xs className="form-row">
                <TextField
                  required
                  fullWidth
                  className="form-input small-width"
                  id="outlined-basic"
                  label="First Name"
                  type="text"
                  name="firstName"
                  variant="outlined"
                  onBlur={handleChange}
                />
                <TextField
                  required
                  fullWidth
                  className="form-input small-width"
                  id="outlined-basic"
                  label="Last Name"
                  type="text"
                  name="lastName"
                  variant="outlined"
                  onBlur={handleChange}
                />
              </Grid>
              <Grid item xs className="form-row">
                <TextField
                  required
                  fullWidth
                  className="form-input"
                  id="outlined-basic"
                  label="Email"
                  type="email"
                  name="email"
                  variant="outlined"
                  onBlur={handleChange}
                />
              </Grid>
              <Grid item xs className="form-row">
                <TextField
                  required
                  fullWidth
                  className="form-input"
                  id="outlined-basic"
                  label="Phone number"
                  type="text"
                  name="phoneNumber"
                  variant="outlined"
                  onBlur={handleChange}
                />
              </Grid>
              <Button type="submit" size="large">
                SEND
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="message">
              <h2>Ready to get started?</h2>
              <div>
                <p>
                  Give us a call, a text, or an email anytime. We endeavour to answer all enquiries
                  within 24hrs on business days.
                </p>
                <div className="contact-details">
                  <span className="bold">Email:</span>
                  <span>contact@legalpracmatic.com</span>
                </div>
                <div className="contact-details">
                  <span className="bold">Phone:</span>
                  <span>+ (000) 000 - 0000</span>
                </div>
                <div className="contact-details">
                  <span className="bold">Whatsapp:</span>
                  <span>+ (000) 000 - 0000</span>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SectionContact;
