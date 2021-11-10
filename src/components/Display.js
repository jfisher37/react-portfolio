import React, { useState } from 'react';
import Nav from './Nav';
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";


// import "../styles/portfolio.css";


export default function Display() {

    const [currentPage, setCurrentPage] = useState("About")

    const renderContent = () => {
        switch (currentPage) {
          case "About":
            return <About />
            break;
          case "Portfolio":
            return <Portfolio />
            break; 
          case "Contact":
            return <Contact />
            break;
          default:
            return <About />
        }
    
      }

  return (
    <div className="new-container">
      <div className="new-nav">
        <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
      <div className="new-content">
        {renderContent()}
        </div>
        <br></br>
        <footer></footer>
    </div>
  );
}