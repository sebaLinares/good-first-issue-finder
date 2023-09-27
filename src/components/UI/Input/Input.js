import React from 'react';

import './Input.scss';

const Input = ({ elementType, value, changed, elementConfig, label }) => {
  const inputElement = () => {
    switch (elementType) {
      case 'select':
        return (
          <select className="SelectElement" value={value} onChange={changed}>
            <option disabled defaultValue value="">
              {' '}
              -- select an option --{' '}
            </option>
            {elementConfig.options.map(el => (
              <option value={el.value} key={el.value}>
                {el.displayValue}
              </option>
            ))}
          </select>
        );
      case 'number':
        return (
          <input
            type="number"
            className="InputElement"
            value={value}
            onChange={changed}
          />
        );
      default:
        return <input type="input" />;
    }
  };

  return (
    <div className="Inpt">
      <label className="Label">{label}</label>
      {inputElement()}
    </div>
  );
};
export default Input;
