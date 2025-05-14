import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { LogIn } from './components/logIn';
import { Register } from './components/register';
import { Desing } from './components/design';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/desing" element={<Desing />} />
        <Route path="/" element={<LogIn />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;