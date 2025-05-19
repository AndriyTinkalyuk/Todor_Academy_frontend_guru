import React from 'react';
import UserProfile from './component/UserProfile';
import Card from './component/Card';
import Toggle from './component/Toggle';
import TemperatureConverter from './component/TemperatureConverter';
import type { User} from './component/UserList/UserList';
import UserList from './component/UserList/UserList';

const person = { 
  personName: "Andrii",
  age: 21, 
  home: "Ukraine"
}

const users: User[] = [
    { id: 1, name: "Олександр Петренко", age: 28, email: "petrenko.oleksandr@example.com" },
    { id: 2, name: "Ірина Коваль", age: 34, email: "koval.iryna@example.com" },
    { id: 3, name: "Максим Іванов", age: 22, email: "ivanov.maxym@example.com" },
    { id: 4, name: "Наталія Шевченко", age: 29, email: "shevchenko.natalia@example.com" },
    { id: 5, name: "Дмитро Бондар", age: 41, email: "bondar.dmytro@example.com" }
];

const App = () => {
  return (
    <div>
      <UserProfile name='Andrii' age={25} email='tinkalukandriy@gmail.com'/>
      <Card title="Welcome"> <p>This is the content of the card.</p> </Card>
      <Toggle/>

      <TemperatureConverter/>

      <UserList users={users}></UserList>
    </div>
    
  );
};

export default App;