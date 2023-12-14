import React from "react";
import "../../styles/components/_home.scss";
import { Link } from "react-router-dom";


function Home() {

  return(
  
  <div className="banner-container">
    <div>
      <h1>Tasty burger</h1>
      <h2>Prenez le temps de vous offrir un savoureux burger</h2>
      <Link to="/menu">Notre menu</Link>
    </div>
  </div>

  );
  
}

export default Home;
