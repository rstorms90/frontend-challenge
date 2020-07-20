import React from 'react';
import { useFormFields } from '../../hooks/useFormFields';
import { FormGroup, TextField, Button } from '@material-ui/core';
import { validateForm, submitForm } from '../../helperFunctions';
import FormSelect from './FormSelect';

import { formStyles } from './FormStyles/FormStyles';

const EventSignUpForm: React.FC = () => {
  const [values, handleChange] = useFormFields({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateForm(values);
    submitForm(values);
    console.log(submitForm(values));
  };

  return (
    <form className="EventSignUpForm" onSubmit={handleSubmit}>
      <FormGroup>
        <div>
          <TextField
            name="firstName"
            inputProps={{ style: formStyles.textField }}
            label="First Name"
            variant="filled"
            value={values.firstName}
            onChange={handleChange}
            required
          />
          <TextField
            name="lastName"
            inputProps={{ style: formStyles.textField }}
            label="Last Name"
            variant="filled"
            value={values.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <TextField
          name="email"
          inputProps={{ style: formStyles.textField }}
          label="E-mail"
          variant="filled"
          type="email"
          value={values.email}
          onChange={handleChange}
          required
        />
        <div style={formStyles.flexContainer}>
          <TextField
            name="company"
            inputProps={{ style: formStyles.textField }}
            label="Company"
            variant="filled"
            value={values.company}
            onChange={handleChange}
            required
          />
          <FormSelect
            role={values.role}
            handleChange={handleChange}
            styles={formStyles}
          />
        </div>
      </FormGroup>

      <Button style={formStyles.button} type="submit" value="Submit">
        Submit
      </Button>
    </form>
  );
};

export default EventSignUpForm;
