import logo from './logo.svg';
import './App.css';
import Header from './user/Header';
import Footer from './user/Footer';
import Home from './user/Home';
import Admin from './admin/Admin';
import Shop from './pages/Shop';
import LoginRegister from './pages/LoginRegister';
import Dashboard from './admin/Dashboard';
import Category from './admin/Category';
import Product from './admin/Product';
import { PrivateRouter } from './PrivateRoutes';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCat from './admin/AddCat';
import AddProduct from './admin/AddProduct';
import EditProduct from './admin/EditProduct';
import {Category as Cat }  from './user/Category';
import ViewProduct from './user/ViewProduct';
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
              <Route path='/admin/category/add' element={<AddCat />}></Route>
              <Route path='/admin/product/add' element={<AddProduct />}></Route>
                <Route path='/admin/product/edit/:id' element={<EditProduct />}></Route>
          </Route>
          </Route>
         
          <Route path='/' element={<Home />}>
            {/* change on change outlet */}

            <Route path='/' element={<Shop />}></Route>
            <Route path='/category/:id' element={<Cat />}></Route>
             <Route path='/product/:id' element={<ViewProduct />}></Route>
            <Route path='/login' element={<LoginRegister />}></Route>
            
          </Route> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
