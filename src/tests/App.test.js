import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/app/App';

describe('app', () => {
  it('renders on page', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId).toBeDefined();
  });
});
