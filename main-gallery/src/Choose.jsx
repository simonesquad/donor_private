import React from 'react';
import { Link } from 'react-router-dom';

const Choose = () => {
  return (
    <div>
    <h1>Choose Your Journey</h1>
    

    <div className="container3">
        <Link to="/cross">
            <h3>yellow</h3>
        </Link>
    </div>
    
    <div className="container3">
        <Link to="/dual">
            <h3>green</h3>
        </Link>
    </div>
    </div>
  )
}

export default Choose