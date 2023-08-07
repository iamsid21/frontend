import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import './App.scss';
import Home from './components/home/Home';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/dash';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path="dash" element={<Dashboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
