import React, { useState } from 'react';
import { FormGroup, TextField, Button } from '@material-ui/core';
import { validateForm, submitForm } from '../../helperFunctions';
import FormSelect from './FormSelect';

import { formStyles } from './FormStyles/FormStyles';

const EventSignUpForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const eventFormBody = {
      firstName,
      lastName,
      email,
      company,
      role,
    };

    validateForm(eventFormBody);
    // console.log(submitForm(eventFormBody))
    submitForm(eventFormBody);
  };

  return (
    <form className="EventSignUpForm" onSubmit={handleSubmit}>
      <FormGroup>
        <div>
          <TextField
            inputProps={{ style: formStyles.textField }}
            label="First Name"
            variant="filled"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            required
          />
          <TextField
            inputProps={{ style: formStyles.textField }}
            label="Last Name"
            variant="filled"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            required
          />
        </div>
        <TextField
          inputProps={{ style: formStyles.textField }}
          label="E-mail"
          variant="filled"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <TextField
          inputProps={{ style: formStyles.textField }}
          label="Company"
          variant="filled"
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
          }}
          required
        />
      </FormGroup>
      <FormSelect role={role} setRole={setRole} styles={formStyles} />

      <Button style={formStyles.button} type="submit" value="Submit">
        Submit
      </Button>
    </form>
  );
};

export default EventSignUpForm;
