import * as React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Slick from './Slick';
import Desert from './Desert';
import Water from './Water';
import Bazaar from './Bazaar';
import Jewel from './Jewel';
import Dual from './Dual';
import S from './S';
import Blue from './Blue';
import Cross from './Cross';
import Mask from './Mask';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Slick />} />
        <Route path="/desert" element={<Desert />} />
        <Route path="/water" element={<Water />} />
        <Route path="/bazaar" element={<Bazaar />} />
        <Route path="/jewel" element={<Jewel />} />
        <Route path="/dual" element={<Dual />} />
        <Route path="/s" element={<S />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/cross" element={<Cross />} />
        <Route path="/mask" element={<Mask />} />
      </Routes>
    </Router>
  );
}

export default App;
