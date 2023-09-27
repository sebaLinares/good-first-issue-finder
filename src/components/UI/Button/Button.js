import React from 'react';

const Button = props => (
  <button disabled={props.invalid} onClick={props.clicked}>
    {props.label}
  </button>
);

export default Button;
