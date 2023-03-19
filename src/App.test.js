import { render, screen, fireEvent } from '@testing-library/react';
import Card from './components/Card';
import BookingForm from './components/BookingForm';
import { FormProvider, useForm } from './hooks/useForm';

describe('Card component', () => {
  it('renders the card correctly', () => {
    const image = 'https://example.com/image.jpg';
    const title = 'Greek Salad';
    const price = 10;
    const description =
      'Fresh and delicious salad with tomatoes, cucumbers, olives, and feta cheese.';
    render(
      <Card
        image={image}
        title={title}
        price={price}
        description={description}
      />
    );

    const titleElement = screen.getByText(title);
    const priceElement = screen.getByText(`$${price}`);
    const descriptionElement = screen.getByText(description);
    const orderButtonElement = screen.getByRole('button', {
      name: /order now/i,
    });

    expect(titleElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(orderButtonElement).toBeInTheDocument();
    expect(screen.getByAltText('greek salad')).toBeInTheDocument();
    expect(screen.getByAltText('greek salad')).toHaveAttribute('src', image);
  });
});

describe('FormProvider', () => {
  it('should render children', () => {
    render(
      <FormProvider>
        <div>Test</div>
      </FormProvider>
    );

    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should update form state on input change', () => {
    render(
      <FormProvider>
        <TestComponent />
      </FormProvider>
    );

    const input = screen.getByLabelText('Name');
    fireEvent.change(input, { target: { value: 'Test Name' } });

    expect(input.value).toBe('Test Name');
  });

  it('should reset form state', () => {
    render(
      <FormProvider>
        <TestComponent />
      </FormProvider>
    );

    const input = screen.getByLabelText('Name');
    fireEvent.change(input, { target: { value: 'Test Name' } });

    expect(input.value).toBe('Test Name');

    const resetButton = screen.getByTestId('reset');
    fireEvent.click(resetButton);
    expect(input.value).toBe('');
  });
});

function TestComponent() {
  const { form, handleInputChange, resetForm } = useForm();

  return (
    <form>
      <label htmlFor='name'>Name</label>
      <input
        id='name'
        name='name'
        value={form.name}
        onChange={handleInputChange}
      />
      <button data-testid='reset' type='button' onClick={resetForm}>
        Reset
      </button>
    </form>
  );
}

describe('BookingForm', () => {
  test('it renders all input fields', () => {
    render(
      <FormProvider>
        <BookingForm />
      </FormProvider>
    );
    // const { getByLabelText } = render(<BookingForm />);
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Your Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose date')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose time')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of guests')).toBeInTheDocument();
    expect(screen.getByLabelText('Occasion')).toBeInTheDocument();
    expect(screen.getByLabelText('Table preference')).toBeInTheDocument();
    expect(screen.getByLabelText('Additional requests')).toBeInTheDocument();
  });

  test('it enables the submit button when the form is valid', () => {
    // const { getByText, getByLabelText } = render(<BookingForm />);
    render(
      <FormProvider>
        <BookingForm />
      </FormProvider>
    );
    const nameInput = screen.getByLabelText('Your Name');
    const emailInput = screen.getByLabelText('Your Email');
    const dateInput = screen.getByLabelText('Choose date');
    const timeInput = screen.getByLabelText('Choose time');
    const numberOfGuestsInput = screen.getByLabelText('Number of guests');
    const occasionInput = screen.getByLabelText('Occasion');
    const tablePreferenceInput = screen.getByLabelText('Table preference');
    const messageInput = screen.getByLabelText('Additional requests');

    // fill in all required fields with valid data
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(dateInput, { target: { value: '2023-04-01' } });
    fireEvent.change(timeInput, { target: { value: '18:00' } });
    fireEvent.change(numberOfGuestsInput, { target: { value: '4' } });
    fireEvent.change(occasionInput, { target: { value: 'birthday' } });
    fireEvent.change(tablePreferenceInput, { target: { value: 'outside' } });
    fireEvent.change(messageInput, { target: { value: 'outdoor' } });

    const submitButton = screen.getByText('Make Reservation');
    // ensure that the submit button is enabled
    expect(submitButton).toBeEnabled();
  });

  test('it disables the submit button when the form is invalid', () => {
    render(
      <FormProvider>
        <BookingForm />
      </FormProvider>
    );
    // const { getByText, getByLabelText } = render(<BookingForm />);
    const nameInput = screen.getByLabelText('Your Name');
    const emailInput = screen.getByLabelText('Your Email');
    const dateInput = screen.getByLabelText('Choose date');
    const timeInput = screen.getByLabelText('Choose time');
    const numberOfGuestsInput = screen.getByLabelText('Number of guests');
    const occasionInput = screen.getByLabelText('Occasion');
    const tablePreferenceInput = screen.getByLabelText('Table preference');
    const messageInput = screen.getByLabelText('Additional requests');
    const submitButton = screen.getByText('Make Reservation');

    // fill in all required fields with invalid data
    fireEvent.change(nameInput, { target: { value: '' } });
    fireEvent.change(emailInput, { target: { value: 'not_an_email' } });
    fireEvent.change(dateInput, { target: { value: '' } });
    fireEvent.change(timeInput, { target: { value: '' } });
    fireEvent.change(numberOfGuestsInput, { target: { value: '0' } });
    fireEvent.change(occasionInput, { target: { value: '' } });
    fireEvent.change(tablePreferenceInput, { target: { value: '' } });
    fireEvent.change(messageInput, { target: { value: '' } });

    // ensure that the submit button is disabled
    expect(submitButton).toBeDisabled();
  });
});
