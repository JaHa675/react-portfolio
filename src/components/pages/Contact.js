import React, { useState } from 'react';
import '../../styles/Contact.css'

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setText(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    if(userName === ''){
      setUserName('Name field is required')
      return
    }
    if (email !== /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) {
      setEmail('valid email address required')
      return
    }
    if(text === ''){
      setText('a message is required')
      return
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setEmail('');
    setText('Sent!');
  };



  return (
    <div>
      <form className="form d-flex flex-column">
        <label for="email" className="form-label">Your email</label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          required
        />
        <label for="userName" className="form-label">Your name</label>
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username" required
        />
        <label for="text" className="form-label">Your message for me</label>
        <textarea class="form-control" rows="10" placeholder="Message" name="text" onChange={handleInputChange} required></textarea>
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;