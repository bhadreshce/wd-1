import './App.css';

import Head from './Head'
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
function App() {

  return (
    <>
      <Head />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
