import React from 'react';
import { validateForm, submitForm } from '../../helperFunctions';

const EventSignUpForm: React.FC = () => {
  return (
    <form className="EventSignUpForm">
      <label>
        First Name:
        <input type="text" name="firstName" />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" />
      </label>
      <label>
        Email:
        <input type="text" name="email" />
      </label>
      <label>
        Company:
        <input type="text" name="company" />
      </label>
      <select>
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
