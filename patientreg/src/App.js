import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from './Components/Form'
import Error from './Components/Error'
import Welcome from './Components/Welcome'
import './App.css';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Form />} />
    <Route path="/welcome" element={<Welcome />} />
    <Route path="/error" element={<Error />} />
  </Routes>
  );
}

export default App;
