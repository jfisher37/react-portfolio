import React from 'react';
import me from '../images/new-me.png'

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <br></br>
      <div id="me-photo-contain">
      <img src={me} alt="Me." id="photo-of-me"/>
      </div>
      <br></br> <br></br>
      <p id="about-me-text" className="central-content">
      I am an aspiring web developer, currently studying at Penn LPS's Bootcamp. My background is in education. I have my M.S.Ed from UPenn, with a specialization in second language acquisition. So, as you might have guessed, I'm a huge language nerd - I'm fluent in Spanish, Portuguese, Japanese, HTML, CSS, and Javascript. Oh, and English too, I guess.
      </p>
    </div>
  );
}