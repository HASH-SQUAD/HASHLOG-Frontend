import React from 'react';
import Main from './pages/main';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Write from './pages/write'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/write" element={<Write/>}/>
        <Route path="/main" element={<Main/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;