import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Info</h1>
      <br></br>
      <ul className="contact-lis">
          <li>
          <a className="contact-links" href="mailto:Joseph.Eric.Fisher@Gmail.com">
                    Joseph.Eric.Fisher@Gmail.com
                </a>
          </li>
          <li>
          <a className="contact-links" href="https://github.com/jfisher37" target="blank_" tabindex="0">
                    Github
                </a>
          </li>
          <li>
          <a className="contact-links" href="https://www.linkedin.com/in/joseph-fisher-6217a063/" target="blank_" tabindex="0">
                    Linkedin
                </a>
          </li>
      </ul>
    </div>
  );
}