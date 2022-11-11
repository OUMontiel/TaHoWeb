import Home from './pages/Home';
import Find from './pages/Find';

import Footer from './components/Footer'
import NavBar from './components/Header'
import Registro from './pages/PopUps';

import { BrowserRouter , Route, Routes } from "react-router-dom"

import './App.css';

function App() {
  return (
    <div >
      <BrowserRouter>
        <NavBar />
        <Registro />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/find' element={<Find/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
