import React from 'react';
import { render } from '@testing-library/react';
import EventSignUpForm from '../components/eventSignUpForm/EventSignUpForm';
import { SnackbarContext } from '../context/SnackBarContext';

describe('event signup form', () => {
  it('renders signup form', () => {
    const { getByRole } = render(
      <SnackbarContext.Provider value={false}>
        <EventSignUpForm />
      </SnackbarContext.Provider>
    );

    const signUpForm = getByRole('form');
    expect(signUpForm).toBeInTheDocument();
  });
});
