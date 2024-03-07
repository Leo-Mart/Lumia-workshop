import React, { useState } from 'react';

function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email, 'Message:', message);
  };

  return (
    <div className='contact-container'>
      <h1>Lumia</h1>
      <h2>Kontakta oss</h2>
      <form onSubmit={handleSubmit} className='contact-form'>
        <label htmlFor='email'>Din email</label>
        <input
          type='email'
          id='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor='message'>Ditt meddelande</label>
        <textarea
          id='message'
          name='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type='submit'>Skicka ditt meddelande</button>
      </form>
    </div>
  );
}

export default ContactForm;
