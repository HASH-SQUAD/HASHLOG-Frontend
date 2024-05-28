import React from 'react';
import Main from './pages/main';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Write from './pages/write'
import SignIn from './pages/singin';
import SignUp from './pages/singup';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/write" element={<Write/>}/>
        <Route path='/auth/signin' element={<SignIn/>}/>
        <Route path='/auth/signup' element={<SignUp/>}/>
        <Route path='*' element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;