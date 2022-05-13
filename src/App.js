import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar.jsx'
import Sidebar from './components/Sidebar';
import { Home } from './components/Home';
import { Productpage } from './components/Productpage';
import {Routes,Route} from 'react-router-dom'
import {Productdetail} from './components/Productdetail'
import { Signup } from './components/Signup';
import { Login } from './components/login';

function App() {
  return (
    <>
    <Navbar />
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/product" element={<Productpage />} />
     <Route path="/product/:id" element={<Productdetail />} />
     <Route path="/register" element={<Signup />} />
     <Route path="/login" element={< Login/>} />
     

   </Routes>
   

   </>
  );
}

export default App;
