import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MarkdownEditor from '../pages/MarkdownEditor';
import  './App.css';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MarkdownEditor />} />
      </Routes>
    </div>
  );
};

export default App;

