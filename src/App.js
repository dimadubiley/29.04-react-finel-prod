import './Components/styleLogIn.css';
import './Components/styleRegister.css'
import { LogIn } from './Components/logIn';
import { Register } from './Components/register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>

      <LogIn />
      {/* <Register /> */}

    </div>
  );
}



// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LogIn />} />
//         <Route path="register" element={<Register />} />
//       </Routes>

//       <div>
//         <p>Lorem import</p>
//         {/* <LogIn /> */}
//       </div>
//     </BrowserRouter>
//   );
// }
export default App;
