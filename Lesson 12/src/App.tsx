import React from 'react';
import ThemeOfDay from './component/ThemeOfDay';
import OutfitSelector from './component/OutfitSelector';


const App = () => {
  return (
    <div>
      <ThemeOfDay time={new Date()} />
      <OutfitSelector date={new Date()} />
    </div>
  );
};

export default App;