import { Route, Routes } from 'react-router-dom';
import Home from './Sources/Home.jsx';
import React from 'react';
import Create from './Sources/create.jsx';
import Edit from './Sources/edit.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/create' element={<Create/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
    </Routes>
  );
}

export default App;
