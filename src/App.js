import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import MakeGame from './Pages/MakeGame';
import PageResult from "./Pages/PageResult";

function App() {
  return (
    <>
     
      <BrowserRouter>
       {/*<nav>
        <ul>
          <li>
            <Link to="/Login">Login</Link>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>*/}
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/MakeGame" element={<MakeGame/>} />
          <Route path="/PageResult" element={<PageResult/>} />
        </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
