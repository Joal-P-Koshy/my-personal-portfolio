import { useEffect } from 'react';
import './App.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Opening from './opening/Opening';
import { Route, Routes } from 'react-router-dom';
import Portfolio from './Portfolio';

function App() {
  useEffect(()=>{
    Aos.init({duration: 2000});
},[])
  return (
    <>
    <Routes>
      <Route path='/' element={<Opening/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
    </Routes>
    </>
  );
}

export default App;
