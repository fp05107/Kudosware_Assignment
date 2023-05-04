import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Simple from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Simple />
      <Signup />
      {/* <Login /> */}
    </div>
  );
}

export default App;
