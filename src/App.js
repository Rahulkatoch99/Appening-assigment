import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import { Dashboard } from "./Pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path="/Registration" element={<Signup />}></Route>
        <Route exact path="/Dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
