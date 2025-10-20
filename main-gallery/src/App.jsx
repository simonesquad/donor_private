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
import Quad from './Quad';
import Sunset from './Sunset';
import Furnished from './Furnished';
import Night from './Night';
import StarShine from './StarShine';
import High from './High';
import Rider from './Rider';
import Salty from './Salty';
import Pink from './Pink';
import Camp from './Camp';
import Day from './Day';
import Vigil from './Vigil';
import Contained from './Contained';
import Desert2 from './Desert2';

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
        <Route path="/quad" element={<Quad />} />
        <Route path="/sunset" element={<Sunset />} />
        <Route path="/sithere" element={<Furnished />} />
        <Route path="/night" element={<Night />} />
        <Route path="/starshine" element={<StarShine />} />
        <Route path="/high" element={<High />} />
        <Route path="/rider" element={<Rider />} />
        <Route path="/salty" element={<Salty />} />
        <Route path="/pink" element={<Pink />} />
        <Route path="/camp" element={<Camp />} />
        <Route path="/day" element={<Day />} />
        <Route path="/vigil" element={<Vigil />} />
        <Route path="/contained" element={<Contained />} />
        <Route path="/desert2" element={<Desert2 />} />
      </Routes>
    </Router>
  );
}

export default App;
