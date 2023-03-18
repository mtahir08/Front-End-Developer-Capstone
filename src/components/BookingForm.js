import React from 'react';
import useForm from '../hooks/useForm';
import Input from './Input';
import './BookingForm.css';
import { occasion, tablePreference, FORM } from '../utils/Constants';

const BookingForm = ({ navigate }) => {
  const { form, timeSlots, isFormValid, handleInputChange, handleSubmit } =
    useForm();

  function handleSubmitForm() {
    const response = handleSubmit();
    return response ? navigate('/booking-confirmation') : null;
  }

  return (
    <form onSubmit={handleSubmitForm} className='reservation-form'>
      <div className='column'>
        <Input
          label='Your Name'
          name={FORM.name}
          type='text'
          value={form.name}
          onChange={handleInputChange}
        />
        <Input
          label='Your Email'
          name={FORM.email}
          type='email'
          value={form.email}
          onChange={handleInputChange}
        />
        <Input
          label='Choose date'
          type='date'
          name={FORM.date}
          value={form.date}
          onChange={handleInputChange}
        />
        <Input
          label='Choose time'
          type='select'
          name={FORM.time}
          value={form.time}
          options={timeSlots.map((slot) => ({
            value: slot,
            label: slot,
          }))}
          onChange={handleInputChange}
        />
      </div>
      <div className='column'>
        <Input
          label='Number of guests'
          type='number'
          name={FORM.numberOfGuests}
          value={form.numberOfGuests}
          onChange={handleInputChange}
          min='1'
          max='10'
          required
        />
        <Input
          label='Occasion'
          type='select'
          name={FORM.occasion}
          value={form.occasion}
          options={occasion}
          onChange={handleInputChange}
        />
        <Input
          label='Table preference'
          type='select'
          value={form.tablePreference}
          name={FORM.tablePreference}
          options={tablePreference}
          onChange={handleInputChange}
        />
      </div>
      <div className='column'>
        <Input
          label='Additional requests'
          type='textarea'
          value={form.message}
          name={FORM.message}
          onChange={handleInputChange}
          rows='10'
          cols='30'
        />
      </div>
      <div className='submit-container'>
        <button disabled={!isFormValid}>Make Reservation</button>
      </div>
    </form>
  );
};

export default BookingForm;
