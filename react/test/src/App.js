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
import Crud from './class/Crud';
import PropsType from './PropsType';
import Memo from './calcu/Memo';
import Forword from './forword/Forword';
import Load from './lazy/Load';

const website = 'MYWeb'
const std = { name: 67, age: 25 }
function App() {
  return (
    <div className="App">

      {/* <Effect/> */}
      {/* <Api /> */}
      {/* <ToDo/> */}
      {/* <Render /> */}
      {/* <Demo /> */}
      {/* <Lifecycle site={website} /> */}
      {/* <PropsType site={website} list={std} /> */}
      {/* <Crud/> */}
      {/* <Todo/> */}
      {/* <Memo /> */}
      {/* <Forword /> */}
      <Load />
    </div>
  );
}

export default App;
