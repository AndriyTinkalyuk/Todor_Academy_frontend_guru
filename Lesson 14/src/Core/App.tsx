import './App.css'
import AppRoutes from '../component/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from '../Store/store';
import Header from './Component/Header/Header';


const App = () => {

  const store = setupStore()



  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;