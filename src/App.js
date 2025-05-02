import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { LogIn } from './Components/logIn';
import { Register } from './Components/register';
import './Components/styleLogIn.css';
import './Components/styleRegister.css';
import { Desing } from './Components/design';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/login" element={<LogIn />} />
    //     <Route path="/register" element={<Register />} />
    //     {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
    //     <Route path="/" element={<LogIn />} />
    //   </Routes>
    // </BrowserRouter>
    
    <Desing />
  );
}

export default App;