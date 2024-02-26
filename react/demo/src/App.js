import './App.css';

import Head from './Head'
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import Test from './Test'
import { Demo } from './Demo'
const name = 'Myweb'
function App() {

  return (
    <>
      {/*<Head />*/}
      <Demo  webname={name}/>
      {/*<Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contact/profile' element={<Profile />} />
      </Routes>*/}
    </>
  );
}

export default App;
