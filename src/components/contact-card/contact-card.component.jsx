import * as React from 'react';
import PropTypes from 'prop-types';

// components
import CardContent from '../card-content/card-content.component';

// styles
import './contact-card.styles.scss';
import ContactPage from '../../pages/contact-us';

const ContactCard = ({ title, data }) => (
  <div className="contact-card">
    <h4>Opening Hours</h4>
    <CardContent title={title} data={data} />
  </div>
);

ContactCard.propTypes = {
  title: PropTypes.title.string.isRequeired,
  data: PropTypes.data.string.isRequeired,
};

export default ContactCard;
