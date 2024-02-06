import { Route, Routes } from 'react-router-dom';
import Home from './Sources/Home.jsx';
import React from 'react';
import Create from './Sources/create.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/create' element={<Create/>}/>
    </Routes>
  );
}

export default App;
