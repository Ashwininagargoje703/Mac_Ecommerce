import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar.jsx'
import Sidebar from './components/Sidebar';
import { Home } from './components/Home';

import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <>
    <Navbar />
   <Routes>
     <Route path="/" element={<Home />} />
    
    

   </Routes>
   

   </>
  );
}

export default App;
