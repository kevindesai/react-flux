import React from "react";
import {Link} from 'react-router-dom';

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>My Home Page</h1>
      <p>This is my first app demo with flux</p>
      <Link to="about" className="btn btn-primary" >About</Link>
    </div>
  );
}

export default HomePage;
