import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../App.css';

function ContactUsPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bj88ppu', 'template_6fv5zbr', form.current, '3qr7wUMwZLHXU7DgN')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="contact-form-container">
      <h1>Contact us</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" /><br /><br />
        <label>Email</label>
        <input type="email" name="user_email" /><br /><br />
        <label>Message</label>
        <textarea name="message" /><br /><br />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default ContactUsPage;
