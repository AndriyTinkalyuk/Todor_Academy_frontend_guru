import React from 'react';
import DragCounter from './component/DragCounter/DragCounter';
import DragToDelete from './component/DragToDelete/DragToDeleteContainer';

const array = ["123", "Крокодил", "Racoon", "boo"]

const App = () => {
  return (
    <div>
      <DragCounter />
      <DragToDelete list={array} />
    </div>
  );
};

export default App;