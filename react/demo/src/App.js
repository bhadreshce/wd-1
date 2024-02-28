import './App.css';
import React,{ useState } from 'react'

import Head from './Head'
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import Test from './Test'
import { Demo } from './Demo'
import  Useref from './Useref'
import Todo  from './Todo'

const name = 'Myweb'
const email = "bhadresh@gmail.com"
function App() {
  
 const [count,setCount] = useState(0)
const inc = () =>{
   setCount(count+1)
}

  return (
    <>
    <Todo />
    {/*<h1>{count}</h1>*/}
      {/*<Head />*/}
       {/*<Useref />*/}
      {/*<Demo incment={inc}  webname={name} myemail={email}/>*/}
      {/*<Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contact/profile' element={<Profile />} />
      </Routes>*/}
    </>
  );
}

export default App;
