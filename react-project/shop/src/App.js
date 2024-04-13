import logo from './logo.svg';
import './App.css';
import Header from './user/Header';
import Footer from './user/Footer';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './user/Home';
import Admin from './admin/Admin';
import Shop from './pages/Shop';
import LoginRegister from './pages/LoginRegister';
import Dashboard from './admin/Dashboard';
import Category from './admin/Category';
import Product from './admin/Product';
import { PrivateRouter } from './PrivateRoutes';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRouter/> }>
            <Route path='/admin' element={<Admin />}>
              <Route path='/admin/dashboard' element={<Dashboard />}></Route>
              <Route path='/admin/category' element={<Category />}></Route>
              <Route path='/admin/product' element={<Product />}></Route>
          </Route>
          </Route>
         
          <Route path='/' element={<Home />}>
            {/* change on change outlet */}

            <Route path='/' element={<Shop />}></Route>
             <Route path='/login' element={<LoginRegister />}></Route>
            
          </Route> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
