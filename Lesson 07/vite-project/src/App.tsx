import React from 'react';
import Button from './components/Button';
import Alert from './components/Alert';
import Parent from './components/Parent';
import StyledButton from './components/StyledButton';
import Person from './components/Person';
import Calculator from './components/Calculator';

const person = { 
  personName: "Andrii",
  age: 21, 
  home: "Ukraine"
}

const App = () => {
  return (
    <div>
      <Button>Click me!</Button>
      <Alert type="error" message="AAAAAAAAAAAAAAAAAAAaa"></Alert>
      <Parent/>
      <StyledButton text='Я стильна кнопка'/>
      <Person personName='Andrii' age={5} home="Ukraine" />


       <Calculator/>
    </div>
    
  );
};

export default App;