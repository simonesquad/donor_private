import * as React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Cube from './Cube';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cube />} />
      </Routes>
    </Router>
  );
}

export default App;
