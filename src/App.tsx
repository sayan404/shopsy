import React from 'react'
import './App.css';
import zevi_logo from '../src/assets/zevi_logo.png'
import Garment from './components/Garment/garment';
function App() {
  return (
    <>
    <img src={zevi_logo} alt='zevi_logo' className='zevi_logo'/>
      <Garment />
    </>
  );
}

export default App;
