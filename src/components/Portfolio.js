import React from 'react';
import cupboard from '../images/cupboard.png';
import password from '../images/password.png';
import quiz from '../images/quiz.png';
import employee from '../images/employee_tracker.png';
import ecommerce from '../images/ecommerce.png';


export default function Portfolio() {
    return (
      <div>
        <h1>Portfolio</h1>
        <div id="apps" className="central-content">
                <a href="https://jfisher37.github.io/got-you-cupboard/" id="app1" target="blank_" tabIndex="-1" className="portfolio-item">
                    <img src={cupboard} alt="Got You Cupboard webpage" className="app-imgs" tabIndex="0" /> 
                    <p className="app-title">
                        Got You Cupboard
                    </p>
                </a>
                <a href="https://jfisher37.github.io/password-generator/" id="app2" target="blank_" tabIndex="-1" className="portfolio-item">
                    <img src={password} alt="Password Generator webpage" className="app-imgs" tabIndex="0" />
                    <p className="app-title">
                        Password Generator
                    </p>
                </a>
                <a href="https://jfisher37.github.io/coding-quiz/" id="app3" target="blank_" tabIndex="-1" className="portfolio-item">
                    <img src={quiz} alt="Coding Quiz Webpage" className="app-imgs" tabIndex="0" />
                    <p className="app-title">
                        Coding Quiz
                    </p>
                </a>
                <a href="https://github.com/jfisher37/employee-tracker" id="app4" target="blank_" tabIndex="-1" className="portfolio-item">
                    <img src={employee} alt="employee tracker CLI" className="app-imgs" tabIndex="0" />
                    <p className="app-title">
                        Employee Tracker
                    </p>
                </a>
                <a href="https://github.com/jfisher37/e-commerce-back-end" id="app5" target="blank_" tabIndex="-1" className="portfolio-item">
                    <img src={ecommerce} alt="Code for an e-commerce back end" className="app-imgs" tabIndex="0" />
                    <p className="app-title">
                        E-commerce Back End
                    </p>
                </a>
            </div>
      </div> 
    );
  }