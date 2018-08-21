import React from 'react';
import './css/button.css';

const Button = ({label}) => (
  <button className="Button" type="button">{label}</button>
);

export default Button;