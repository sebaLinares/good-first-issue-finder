import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerWidget = ({ moment, handleChange }) => {
  const [startDate, setStartDate] = useState(new Date());

  const handleInputLocally = dateChosen => {
    const { value } = dateChosen.target;
    console.log('value', value);
    setStartDate(value);
    setTimeout(() => {
      handleChange({
        target: {
          name: moment,
          value,
        },
      });
    }, 0);
  };

  return (
    <DatePicker
      dateFormat="yyyy-MM-dd"
      selected={startDate}
      onChange={e => handleInputLocally({ target: { name: moment, value: e } })}
      className="intext"
    />
  );
};

DatePickerWidget.propTypes = {
  moment: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default DatePickerWidget;
