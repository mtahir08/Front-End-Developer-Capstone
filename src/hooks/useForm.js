import { useMemo, useReducer, useState } from 'react';
import { useFormContext } from '../store/FormContext';
import { fetchAPI, submitAPI } from '../utils/apiMockup';
import { ACTION_TYPES, emailRegex, FORM } from '../utils/Constants';

const initialState = {
  name: '',
  email: '',
  date: '',
  time: '',
  numberOfGuests: 1,
  tablePreference: '',
  occasion: '',
  message: '',
};

function formReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.NAME:
      return {
        ...state,
        [FORM.name]: action.payload,
      };
    case ACTION_TYPES.EMAIL:
      return {
        ...state,
        [FORM.email]: action.payload,
      };
    case ACTION_TYPES.DATE:
      return {
        ...state,
        [FORM.date]: action.payload,
      };
    case ACTION_TYPES.TIME:
      return {
        ...state,
        [FORM.time]: action.payload,
      };
    case ACTION_TYPES.GUESTS:
      return {
        ...state,
        [FORM.numberOfGuests]: action.payload,
      };
    case ACTION_TYPES.TABLE:
      return {
        ...state,
        [FORM.tablePreference]: action.payload,
      };
    case ACTION_TYPES.OCCASION:
      return {
        ...state,
        [FORM.occasion]: action.payload,
      };
    case ACTION_TYPES.MESSAGE:
      return {
        ...state,
        [FORM.message]: action.payload,
      };
    default:
      return state;
  }
}

const useForm = () => {
  const [form, dispatch] = useReducer(formReducer, initialState);
  const [timeSlots, setTimeslots] = useState(['Choose date first']);
  const formContext = useFormContext();

  const isFormValid = useMemo(() => {
    return (
      emailRegex.test(form.email.trim()) &&
      form.name.trim().length >= 3 &&
      form.date &&
      form.time &&
      form.numberOfGuests
    );
  }, [form]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name, payload: value });

    if (name === ACTION_TYPES.DATE) {
      setTimeslots(fetchAPI(new Date(value)));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      submitAPI(form);
      formContext.setForm(form);
    }
  };

  return {
    form,
    timeSlots,
    isFormValid,
    handleInputChange,
    handleSubmit,
  };
};

export default useForm;
