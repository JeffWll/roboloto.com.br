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
          <Route path="/roboloto.com.br" element={<Login/>} />
          <Route path="/roboloto.com.br/Dashboard" element={<Dashboard/>} />
        </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
