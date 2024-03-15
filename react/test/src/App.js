import logo from './logo.svg';
import './App.css';
import Calcu from './calcu/Calcu';
import Effect from './effect/Effect';
import Api from './effect/Api';
import ToDo from './effect/ToDo';
import Render from './conditionalren/Render';
function App() {
  return (
    <div className="App">

      {/* <Effect/> */}
      {/* <Api /> */}
      {/* <ToDo/> */}
      <Render />
    </div>
  );
}

export default App;
