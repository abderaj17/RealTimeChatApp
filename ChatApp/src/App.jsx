import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import EditorPage from './components/EditorPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/editor/roomId' element={<EditorPage />} />
    </Routes>
  )
}

export default App