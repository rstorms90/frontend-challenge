import React from 'react';
import { SnackbarProvider } from '../../context/SnackBarContext';
import EventSignUpForm from '../eventSignUpForm/EventSignUpForm';
import logo from '../../assets/techstars-logo-white.svg';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { overrideMaterialUIFormStyles } from '../eventSignUpForm/FormStyles/FormStyles';
import EventTitle from '../eventTitle/EventTitle';

import './App.css';

// .MuiFormLabel-root.Mui-focused
const theme = createMuiTheme({
  // Override Material-UI input styles
  overrides: overrideMaterialUIFormStyles,
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <div className="App">
          <section className="App-logo-form">
            <img src={logo} className="App-logo" alt="logo" />
            <EventTitle />
            <EventSignUpForm />
          </section>
        </div>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
