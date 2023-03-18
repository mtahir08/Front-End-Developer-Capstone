import React from 'react';
import useForm from '../hooks/useForm';
import Input from './Input';
import './BookingForm.css';
import { occasion, tablePreference } from '../utils/Constants';

const BookingForm = ({ navigate }) => {
  const {
    form,
    timeSlots,
    isFormValid,
    changeNameHandler,
    changeEmailHandler,
    changeDateHandler,
    changeTimeHandler,
    changeGuestsHandler,
    changeTableHandler,
    changeOccasionHandler,
    changeMessageHandler,
    submitHandler,
  } = useForm();

  function handleSubmit() {
    const response = submitHandler();
    return response ? navigate('/booking-confirmation') : null;
  }

  return (
    <form onSubmit={handleSubmit} className='reservation-form'>
      <div className='column'>
        <Input
          label='Your Name'
          type='text'
          value={form.name}
          onChange={changeNameHandler}
        />
        <Input
          label='Your Email'
          type='email'
          value={form.email}
          onChange={changeEmailHandler}
        />
        <Input
          label='Choose date'
          type='date'
          value={form.date}
          onChange={changeDateHandler}
        />
        <Input
          label='Choose time'
          type='select'
          value={form.time}
          options={timeSlots.map((slot) => ({
            value: slot,
            label: slot,
          }))}
          onChange={changeTimeHandler}
        />
      </div>
      <div className='column'>
        <Input
          label='Number of guests'
          type='number'
          value={form.numberOfGuests}
          onChange={changeGuestsHandler}
          min='1'
          max='10'
          required
        />
        <Input
          label='Occasion'
          type='select'
          value={form.occasion}
          options={occasion}
          onChange={changeOccasionHandler}
        />
        <Input
          label='Table preference'
          type='select'
          value={form.tablePreference}
          options={tablePreference}
          onChange={changeTableHandler}
        />
      </div>
      <div className='column'>
        <Input
          label='Additional requests'
          type='textarea'
          value={form.message}
          onChange={changeMessageHandler}
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
