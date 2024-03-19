import logo from './logo.svg';
import './App.css';
import Calcu from './calcu/Calcu';
import Effect from './effect/Effect';
import Api from './effect/Api';
import ToDo from './effect/ToDo';
import Render from './conditionalren/Render';
import Demo from './class/Demo';
import Lifecycle from './class/Lifecycle';
import Todo from './class/Todo';

const website = 'MYWeb'
function App() {
  return (
    <div className="App">

      {/* <Effect/> */}
      {/* <Api /> */}
      {/* <ToDo/> */}
      {/* <Render /> */}
      {/* <Demo /> */}
      {/* <Lifecycle site={website} /> */}
      <Todo/>
    </div>
  );
}

export default App;
