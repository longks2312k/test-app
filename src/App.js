import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import About from './pages/About'
import Blog from './pages/Blog'
import Cultural from './pages/Cultural'
import Events from './pages/Events'
import ForCt from './pages/ForCt'
import Recruiment from './pages/Recruitment'

function App() {



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cultural" element={<Cultural />} />
        <Route path="/events" element={<Events />} />
        <Route path="/forcommuty" element={<ForCt />} />
        <Route path="/recruiment" element={<Recruiment />} />
      </Routes>
    </div>
  );
}

export default App;
