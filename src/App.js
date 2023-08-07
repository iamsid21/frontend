import React from 'react';
import './App.scss';
import Home from './components/home/Home';
import { AuthProvider } from "./contexts/authContext"

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthProvider>
      <div className='app bg-light'>
        <Home />
      </div>
    </AuthProvider>

  );
}

export default App;
