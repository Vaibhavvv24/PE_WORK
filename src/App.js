import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Login from './components/Login/Login';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/page1" element={<Page1 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
    </Routes>
  );
};

export default App;
