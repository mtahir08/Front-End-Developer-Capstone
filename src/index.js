import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FormProvider } from './hooks/useForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </React.StrictMode>
);
