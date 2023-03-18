import React from 'react';
import './Input.css';

const Input = ({ label, type, value, options, onChange, name }) => {
  const inputProps = {
    name,
    type,
    value,
    onChange,
  };

  return (
    <label className='input-container'>
      <p>{label}</p>
      {type === 'select' ? (
        <select {...inputProps} data-testid={name}>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      ) : (
        <input {...inputProps} data-testid={name} />
      )}
    </label>
  );
};

export default Input;
