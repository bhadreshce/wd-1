import logo from './logo.svg';
import {  , useDispatch } from 'react-redux';
import './App.css';
import { Increement, Decreement } from './Actions';
import Head from './Head';
function App() {
  // const state = useSelector((result) => {
  //   console.log(result);

  // })
  const dispatch = useDispatch()
  return (

    <div className="App">
      <Head />
      <button onClick={() => {
        dispatch(Increement())
      }}>Increemenet</button>
      <button onClick={() => {
        dispatch(Decreement())
      }}>Decreement</button>
    </div>
  );
}

export default App;
