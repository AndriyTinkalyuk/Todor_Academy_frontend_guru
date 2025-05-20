import React from 'react';
import Timer from './component/Timer';
import FetchData from './component/FetchData';
import ErrorBoundary from './component/ErrorBoundary';
import Logger from './component/Logger';


const App = () => {
  return (
    <div>
      <Logger someValue='456' list={[`1`,`20`,`33`]}></Logger>
      <Timer></Timer>
      <ErrorBoundary>
    <FetchData/>
      </ErrorBoundary>
    </div>
    
  );
};

export default App;