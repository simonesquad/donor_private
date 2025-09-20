import * as React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Slick from './Slick';
import Desert from './Desert';
import Water from './Water';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Slick />} />
        <Route path="/desert" element={<Desert />} />
        <Route path="/water" element={<Water />} />
      </Routes>
    </Router>
  );
}

export default App;
