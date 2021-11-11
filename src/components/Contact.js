import React, { useState } from 'react';

import { validateEmail } from '../utils/helpers';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    }  else if (inputType === 'message') {
      setMessage(inputValue);
    } 
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email');
      return;
    }
    if (!message) {
      setErrorMessage('Please enter a message');
      return;
    }

  
    setUserName('');
    setEmail('');
    setMessage('');
    setErrorMessage(`Thank you for your message, ${userName}!`)
  };

  return (
    <div>
    <h1>Contact Me</h1>
    <br></br>
    <div>
      <form className="form">
        <label for="email" className="central-content">Please enter your email address:</label>
        <br></br>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <br></br>
        <label for="userName" className="central-content">Please enter your name:</label>
        <br></br>
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <br></br>
        <label for="message" className="central-content">What would you like to tell me?</label>
        <br></br>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <br></br>
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      <br></br>
      {errorMessage && (
        <div>
          <p className="central-content" id="contact-error-message">{errorMessage}</p>
        </div>
      )}
    </div>
    </div>
  );
}
