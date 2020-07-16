import React from 'react';
import EventSignUpForm from './components/eventSignUpForm/EventSignUpForm';
import logo from './assets/techstars-logo-white.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EventSignUpForm />
      </header>
    </div>
  );
};

export default App;
