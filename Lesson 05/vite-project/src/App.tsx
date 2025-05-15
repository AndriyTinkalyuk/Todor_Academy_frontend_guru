import React from 'react';
import Greetings from './components/Greetings';


const welcomeElement = <h1>Привіт, світ!</h1>;
const userAge: number = 21;
const isVisitor: boolean = true;

const welcomeElementUser = <p>Привіт! Тобі {userAge} років!</p>
const visitorStatusElement = isVisitor ? <p>Ласкаво просимо на наш курс!</p> : <p>Будь ласка, зареєструйтесь для доступу.</p>;

const App = () => {
  return (
    <div>
      <div>{welcomeElement}</div>
      <Greetings firstName = {"Andrii"} lastName ={"Tinkaluk"}/>
      {welcomeElementUser}
      {visitorStatusElement}
    </div>
  );
};

export default App;