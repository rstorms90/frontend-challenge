import React from 'react';
import EventSignUpForm from './components/eventSignUpForm/EventSignUpForm';
import logo from './assets/techstars-logo-white.svg';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import './App.css';

const theme = createMuiTheme({
  // Override Material-UI input styles
  overrides: {
    MuiInputLabel: {
      root: {
        color: 'white',
      },
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <EventSignUpForm />
        </header>
      </div>
    </ThemeProvider>
  );
};

export default App;
