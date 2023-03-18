import React from 'react';
import './Input.css';

const Input = ({ label, type, value, options, onChange }) => {
  const inputProps = {
    type,
    value,
    onChange,
  };

  return (
    <label className='input-container'>
      <p>{label}</p>
      {type === 'select' ? (
        <select {...inputProps}>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      ) : (
        <input {...inputProps} />
      )}
    </label>
  );
};

export default Input;