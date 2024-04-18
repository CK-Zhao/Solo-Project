import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Home from './Home.jsx';
import Signup from './Signup.jsx';
import Movies from './Movies.jsx';
import Mylist from './Mylist.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/movie' element={<Movies />} />
        <Route path='/mylist' element={<Mylist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
