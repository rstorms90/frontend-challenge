import React, { useContext } from 'react';
import { useFormFields } from '../../hooks/useFormFields';
import { FormGroup, TextField, Button } from '@material-ui/core';
import { validateForm, submitForm } from '../../helperFunctions';
import FormSelect from './FormSelect';

import { SnackbarContext } from '../../context/SnackBarContext';
import Snackbar from '../snackbar/Snackbar';

import { formStyles } from './FormStyles/FormStyles';
import './FormStyles/MediaQueryFormStyles.css';

const EventSignUpForm: React.FC = () => {
  const {
    open,
    severity,
    message,
    setOpen,
    setSeverity,
    setMessage,
  } = useContext(SnackbarContext);

  const [values, handleChange, reset] = useFormFields({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
  });

  type formElem = React.FormEvent<HTMLFormElement>;

  const handleSubmit = (e: formElem) => {
    e.preventDefault();

    const validForm = validateForm(values, {
      open,
      severity,
      message,
      setOpen,
      setSeverity,
      setMessage,
    });

    if (validForm) {
      submitForm(values);
      console.log(submitForm(values));
      reset();
    } else {
      return false;
    }
  };

  return (
    <form className="EventSignUpForm" onSubmit={handleSubmit}>
      <FormGroup>
        <div className="textfield-container">
          <TextField
            name="firstName"
            inputProps={{ style: formStyles.textField }}
            label="First Name"
            variant="filled"
            value={values.firstName ? values.firstName : ''}
            onChange={handleChange}
          />
          <TextField
            name="lastName"
            inputProps={{ style: formStyles.textField }}
            label="Last Name"
            variant="filled"
            value={values.lastName ? values.lastName : ''}
            onChange={handleChange}
          />
        </div>
        <div className="textfield-container">
          <TextField
            name="email"
            inputProps={{ style: formStyles.textField }}
            label="E-mail"
            variant="filled"
            value={values.email ? values.email : ''}
            onChange={handleChange}
          />
        </div>

        <div
          className="company-role-container"
          style={formStyles.flexContainer}
        >
          <TextField
            name="company"
            inputProps={{ style: formStyles.textField }}
            label="Company"
            variant="filled"
            value={values.company ? values.company : ''}
            onChange={handleChange}
          />
          <FormSelect
            role={values.role ? values.role : ''}
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
