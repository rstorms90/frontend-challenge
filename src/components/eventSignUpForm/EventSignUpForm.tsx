import React, { useContext } from 'react';
import { useFormFields } from '../../hooks/useFormFields';
import { FormGroup, TextField, Button } from '@material-ui/core';
import { validateForm, submitForm } from '../../helperFunctions';
import FormSelect from './FormSelect';

import { SnackbarContext } from '../../context/SnackBarContext';
import Snackbar from '../snackbar/Snackbar';

import { formStyles } from './FormStyles/FormStyles';

const EventSignUpForm: React.FC = () => {
  const {
    open,
    severity,
    message,
    setOpen,
    setSeverity,
    setMessage,
  } = useContext(SnackbarContext);

  const [values, handleChange] = useFormFields({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateForm(values, {
      open,
      setOpen,
      severity,
      setSeverity,
      message,
      setMessage,
    });
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
          />
          <TextField
            name="lastName"
            inputProps={{ style: formStyles.textField }}
            label="Last Name"
            variant="filled"
            value={values.lastName}
            onChange={handleChange}
          />
        </div>

        <TextField
          name="email"
          inputProps={{ style: formStyles.textField }}
          label="E-mail"
          variant="filled"
          value={values.email}
          onChange={handleChange}
        />
        <div style={formStyles.flexContainer}>
          <TextField
            name="company"
            inputProps={{ style: formStyles.textField }}
            label="Company"
            variant="filled"
            value={values.company}
            onChange={handleChange}
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
      <Snackbar />
    </form>
  );
};

export default EventSignUpForm;
