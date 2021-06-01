import * as React from 'react';

// styles
import './item.styles.scss';

// eslint-disable-next-line react/prop-types
const Item = ({ icon, text }) => (
  <div className="item">
    <span className="icon">{icon}</span>
    <span className="text">{text}</span>
  </div>
);

export default Item;
