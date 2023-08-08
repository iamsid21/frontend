import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import './App.scss';
import Home from './components/home/Home';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dash';
import { AuthProvider } from "./contexts/authContext"
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path="dash" element={<Dashboard/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
