import React from 'react';

// styles
import './form-input.styles.scss';

const FormInput = ({ type, name, placeholder, handleChange }) => (
  <div className="input-field">
    <input type={type} id={name} name={name} placeholder={placeholder} onBlur={handleChange} />
  </div>
);

export default FormInput;
