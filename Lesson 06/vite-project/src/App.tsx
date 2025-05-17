import React from 'react';
import SimpleElement from './components/SimpleElement'
import DynamicElement from './components/DynamicElement';
import ComplexElement from './components/ComplexElement';

const App = () => {
  return (
    <div>
    {SimpleElement}
    <DynamicElement content="Це працює, але це не зручно"/>
    <ComplexElement/>
    </div>
  );
};

export default App;