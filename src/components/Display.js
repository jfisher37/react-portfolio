import React, { useState } from 'react';
import Nav from './Nav';
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";


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
    <div>
        <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        {renderContent()}
    </div>
  );
}