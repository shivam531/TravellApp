// ContactForm.js
import React from 'react';
const ContactForm = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">Contact Us</h2>
      <form className="contact__form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4"></textarea>
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
