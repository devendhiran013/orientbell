import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from './Pages/RegisterPage';
import LoginPage from "./Pages/LoginPage";
import Home from "./Pages/Home";
import Alltiles from "./Pages/Alltiles";
import DesignIdeas from "./Pages/DesignIdeas";
import ContactUs from "./Pages/ContactUs";
import BecomeADealer from "./Pages/BecomeADealer";
import AboutUs from "./Pages/AboutUs";
import './App.css';
import CartPage from "./Pages/CartPage";


function App() {
  return (
    <BrowserRouter>



      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<Alltiles />} />
        <Route path="/designideas" element={<DesignIdeas />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/becomeadealer" element={<BecomeADealer />} />
        <Route path="/aboutus" element={<AboutUs />} />
    
       

        <Route path="/cart" element={<CartPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
