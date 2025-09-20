import * as React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Slick from './Slick';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Slick />} />
      </Routes>
    </Router>
  );
}

export default App;
