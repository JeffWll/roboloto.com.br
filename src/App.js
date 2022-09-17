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

function App() {
  return (
    <>
     
      <BrowserRouter>
      {/* <nav>
        <ul>
          <li>
            <Link to="/Login">Login</Link>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav> */}
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
        </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
