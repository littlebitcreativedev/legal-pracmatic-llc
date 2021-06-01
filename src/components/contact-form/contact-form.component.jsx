import * as React from 'react';
import { useState } from 'react';
import { navigate } from 'gatsby-link';
import emailjs from 'emailjs-com';

// material ui components
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// components

// styles
import './contact-form.styles.scss';

/* const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
} */

const ContactForm = () => {
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
          console.log(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} action="/thank-you/" className="contact-form">
      <input type="hidden" name="contact_number" />
      <Grid item className="form-row">
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
      <Grid item className="form-row">
        <TextField
          required
          fullWidth
          className="form-input small-width"
          id="outlined-basic"
          label="Email"
          type="email"
          name="email"
          variant="outlined"
          onBlur={handleChange}
        />
        <TextField
          required
          fullWidth
          className="form-input small-width"
          id="outlined-basic"
          label="Phone number"
          type="text"
          name="phoneNumber"
          variant="outlined"
          onBlur={handleChange}
        />
      </Grid>
      <Grid item className="form-row">
        <TextField
          required
          select
          fullWidth
          name="service"
          label="Services"
          onBlur={handleChange}
          helperText="Please select a service"
          variant="outlined"
        >
          <MenuItem value="translations">Translation</MenuItem>
          <MenuItem value="notary-public">Notary Public</MenuItem>
          <MenuItem value="document-prep">Legal Document Preparation</MenuItem>
          <MenuItem value="conciliations">Conciliation</MenuItem>
        </TextField>
      </Grid>
      <Grid item className="form-row">
        <TextField
          required
          fullWidth
          multiline
          id="outlined-basic"
          label="Message"
          type="text"
          rows="10"
          cols="30"
          name="message"
          variant="outlined"
          onBlur={handleChange}
        />
      </Grid>
      <Button type="submit" size="large">
        SEND
      </Button>
    </form>
  );
};

export default ContactForm;
