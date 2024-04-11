import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import Footer from './pages/Footer';
import LoginRegister from './pages/LoginRegister';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
function App() {
  return (
    <>
     
     
      
        
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/reg" element={<Register/>}>
              <Route path="login" element={<LoginRegister/>}></Route>
          </Route>
            
      </Routes>
      </BrowserRouter>
        
   
    
    </>
  );
}

export default App;
