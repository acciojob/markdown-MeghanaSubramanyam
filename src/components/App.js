import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MarkdownEditor from './MarkdownEditor';

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<MarkdownEditor />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

