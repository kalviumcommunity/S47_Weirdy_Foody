import { Route, Routes } from 'react-router-dom';
import Home from './Sources/Home.jsx';
import React from 'react';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
