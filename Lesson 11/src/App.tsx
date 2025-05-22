import React from 'react';
import DynamicText from './component/DynamicText';
import Greeting from './component/Greeting';


const App = () => {
  return (
    <div>
      <DynamicText />
      <Greeting username='Alice' />
    </div>
  );
};

export default App;