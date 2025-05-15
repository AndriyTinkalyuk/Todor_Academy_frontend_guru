import React from 'react';
import Greetings from './components/Greetings';

const App = () => {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <Greetings firstName = {"Andrii"} lastName = {"Tinkaluk"}/>
    </div>
  );
};

export default App;