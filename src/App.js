import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar.jsx'
import Sidebar from './components/Sidebar';
import { Home } from './components/Home';
import { Productpage } from './components/Productpage';
import {Routes,Route} from 'react-router-dom'
import {Productdetail} from './components/Productdetail';
import { Cart } from './components/Cart';
import { SignInSide } from "./components/sign-in/Login";
import { SignUpSide } from "./components/sign-up/SignUp";
function App() {
  return (
    <>
    <Navbar />
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/product" element={<Productpage />} />
     <Route path="/product/:id" element={<Productdetail />} />
     <Route path="/signup" element={<SignUpSide />} />
      <Route path="/signin" element={<SignInSide />} />
     <Route path="/cart" element={<Cart />} />
     

   </Routes>
   

   </>
  );
}

export default App;
