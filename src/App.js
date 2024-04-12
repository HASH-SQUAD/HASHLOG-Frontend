import React from 'react';
import Main from './pages/main';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Write from './pages/write'
import SignIn from './pages/singin';
import SignUp from './pages/singup';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/write" element={<Write/>}/>
        <Route path='/auth/singin' element={<SignIn/>}/>
        <Route path='/auth/singup' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;