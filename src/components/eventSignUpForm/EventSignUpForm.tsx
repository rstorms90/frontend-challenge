import React, { useState } from 'react';
import { validateForm, submitForm } from '../../helperFunctions';

const EventSignUpForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('investor');

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
    // console.log(submitForm(eventFormBody));
  };

  return (
    <form className="EventSignUpForm" onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </label>
      <label>
        Company:
        <input
          type="text"
          name="company"
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
          }}
        />
      </label>
      <select
        value={role}
        onChange={(e) => {
          setRole(e.target.value);
        }}
      >
        <option value="investor">Investor</option>
        <option value="mentor">Mentor</option>
        <option value="founder">Founder</option>
        <option value="networkMember">Network Member</option>
      </select>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default EventSignUpForm;
