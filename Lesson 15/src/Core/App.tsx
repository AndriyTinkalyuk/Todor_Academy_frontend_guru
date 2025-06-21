import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../component/AppRoutes";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer";
import './App.css'
import type { IBook } from "../Model/IBook";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;