import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { LogIn } from './Components/logIn';
import { Register } from './Components/register';
import './Components/styleLogIn.css';
import './Components/styleRegister.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/Components/register" element={<Register />} />
        {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
        <Route path="/" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;