import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ChatInterface from './pages/ChatInterface';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chat' element={<ChatInterface />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
