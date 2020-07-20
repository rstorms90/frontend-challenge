import { useState } from 'react';

export const useFormFields = (initialState: any) => {
  const [fields, setValues] = useState(initialState);

  const reset = () => {
    setValues('');
  };

  type inputElem = React.ChangeEvent<HTMLInputElement>;

  return [
    fields,
    (event: inputElem) => {
      setValues({
        ...fields,
        [event.target.name]: event.target.value,
      });
    },
    reset,
  ];
};
