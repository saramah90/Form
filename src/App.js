import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import SignUP from './components/SignUP';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/Login" element={<Login/>} />
        <Route path="/SignUP" element={<SignUP/>} />
        <Route path='/' element={< Navigate  to="/SignUP"/>}/>
      
      </Routes>
    
    </div>
  );
}

export default App;
