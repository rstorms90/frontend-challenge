import { useState } from 'react';

export const useFormFields = (initialState: any) => {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({
        ...fields,
        [event.target.name]: event.target.value,
      });
    },
  ];
};
