import logo from './logo.svg';
import './App.css';
import Login from './Login';
function App() {
  // localStorage.setItem('name', 'smith')
  //  localStorage.setItem('password','123')
  // localStorage.removeItem('password')
  return (
    <div className="App">
      {/* setItem getItem */}
      <Login />
      
    </div>
  );
}

export default App;
