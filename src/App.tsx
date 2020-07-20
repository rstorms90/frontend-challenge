import React from 'react';
import EventSignUpForm from './components/eventSignUpForm/EventSignUpForm';
import logo from './assets/techstars-logo-white.svg';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { overrideMaterialUIFormStyles } from './components/eventSignUpForm/FormStyles/FormStyles';

import './App.css';
// .MuiFormLabel-root.Mui-focused
const theme = createMuiTheme({
  // Override Material-UI input styles
  overrides: overrideMaterialUIFormStyles,
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Annual Pancake Festival</h3>
          <EventSignUpForm />
        </header>
      </div>
    </ThemeProvider>
  );
};

export default App;
