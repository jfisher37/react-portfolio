import React from 'react';
import cupboard from '../images/cupboard.png';
import n2t from '../images/new2town.png';
import blog from '../images/tech_blog.png';
import employee from '../images/employee_tracker.png';
import ecommerce from '../images/ecommerce.png';


export default function Portfolio() {
    return (
      <div>
        <h1>Portfolio</h1>
        <div id="apps" className="central-content">
                <a href="https://github.com/jfisher37/new2town" id="app1" target="blank_" tabIndex="-1" className="portfolio-item">
                    <img src={n2t} alt="New2Town webpage" className="app-imgs" tabIndex="0" /> 
                    <p className="app-title">
                        New2Town
                    </p>
                </a>
                <a href="https://github.com/jfisher37/got-you-cupboard" id="app2" target="blank_" tabIndex="-1" className="portfolio-item">
                    <img src={cupboard} alt="Got You Cupboard webpage" className="app-imgs" tabIndex="0" /> 
                    <p className="app-title">
                        Got You Cupboard
                    </p>
                </a>
                <a href="https://github.com/jfisher37/tech-blog" id="app3" target="blank_" tabIndex="-1" className="portfolio-item">
                    <img src={blog} alt="Tech Blog Webpage" className="app-imgs" tabIndex="0" />
                    <p className="app-title">
                        Tech Blog
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