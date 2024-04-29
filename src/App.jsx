import React from 'react';
import {Sidebar } from './Component/sidebar/Sidebar';
import  M1 from './Component/main/M1';

const App = () => {
  return (
    <div className='container'>
      <Sidebar/>
    
      <M1/>
    </div>
  );
}

export default App;
