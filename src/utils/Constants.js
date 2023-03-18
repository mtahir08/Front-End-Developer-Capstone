import greekSalad from '../assets/Salad.jpg';
import bruschetta from '../assets/Bruchetta.svg';
import LemonDessert from '../assets/LemonDessert.jpg';

export const occasion = [
  { value: '', label: 'None' },
  { value: 'birthday', label: 'Birthday' },
  { value: 'engagement', label: 'Engagement' },
  { value: 'anniversary', label: 'Anniversary' },
];
export const tablePreference = [
  { value: '', label: 'None' },
  { value: 'inside', label: 'Inside' },
  { value: 'outside', label: 'Outside' },
];

export const specialsData = [
  {
    img: greekSalad,
    title: 'Greek Salad',
    price: 12.99,
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    img: bruschetta,
    title: 'Bruschetta',
    price: 5.99,
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    img: LemonDessert,
    title: 'Lemon Dessert',
    price: 5.0,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

export const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export const ACTION_TYPES = {
  NAME: 'NAME',
  EMAIL: 'EMAIL',
  DATE: 'DATE',
  TIME: 'TIME',
  GUESTS: 'GUESTS',
  TABLE: 'TABLE',
  OCCASION: 'OCCASION',
  MESSAGE: 'MESSAGE',
};

export const FORM = {
  name: 'name',
  email: 'email',
  date: 'date',
  time: 'time',
  numberOfGuests: 'numberOfGuests',
  tablePreference: 'tablePreference',
  occasion: 'occasion',
  message: 'message',
};
