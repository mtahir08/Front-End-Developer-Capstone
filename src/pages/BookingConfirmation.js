import React from 'react';

const BookingConfirmation = ({
  name,
  date,
  time,
  numberOfGuests,
  tablePreference,
  occasion = false,
  message = false,
}) => {
  return (
    <main>
      <section
        style={{ display: 'flex', 'flex-direction': 'column', gap: '0.5rem' }}
      >
        <h1>Thank you for your booking, {name}!</h1>
        <p>
          We confirm your reservation for {date} at {time} for {numberOfGuests}{' '}
          {`guest${numberOfGuests > 1 ? 's' : ''}`}
        </p>
        {occasion && (
          <p>
            We noticed that you want to celebrate{' '}
            {occasion === 'birthday' ? 'a' : 'an'} {occasion}. Thank you for
            your trust in us, we will handle your request with priority!{' '}
          </p>
        )}
        {tablePreference && (
          <p>
            Since you expressed the wish to sit {tablePreference} we will
            accommodate to your request.
          </p>
        )}
        {message && (
          <p>
            You also sent some specific message. Our team will definetely
            consider your message. In case of necessity we will send you an
            email.
          </p>
        )}
      </section>
    </main>
  );
};

export default BookingConfirmation;
