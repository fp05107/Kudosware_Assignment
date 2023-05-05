import "./App.css";
import Signup from "./components/Signup";
import Simple from "./components/Navbar";
import Users from "./components/Users";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Simple />
        <Routes>
          <Route exact path="/applicants" element={<Users  />} />
          <Route path="/" element={<Signup />} />
        </Routes>
    </div>
  );
}

export default App;
