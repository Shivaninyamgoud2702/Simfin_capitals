import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    city: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    // For contact number, allow only digits and restrict to 10 digits
    if (name === 'contact') {
      // Remove non-numeric characters
      const cleanedValue = value.replace(/[^0-9]/g, '');
      if (cleanedValue.length <= 10) {
        setFormData({ ...formData, [name]: cleanedValue });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateContact = (contact) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(contact);
  };

  const validateCity = (city) => {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(city);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the fields
    if (!validateContact(formData.contact)) {
      setStatus('Please enter a valid 10-digit contact number.');
      return;
    }

    if (!formData.email.includes('@') || formData.email.length < 5) {
      setStatus('Please enter a valid email address.');
      return;
    }

    if (!validateCity(formData.city)) {
      setStatus('Please enter a valid city name.');
      return;
    }

    // Proceed to send email if all validations pass
    emailjs.send(
      'service_gprmfvp',
      'template_xt1r4ps',
      formData,
      'IbhtryxgC0JOAyPJk'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setStatus('Message sent successfully!');
    })
    .catch((error) => {
      console.error('FAILED...', error);
      setStatus('Failed to send message. Please try again later.');
    });
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          maxLength="10" // Limit input length to 10 digits
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
      {status && <p className={status.includes('successfully') ? '' : 'failed'}>{status}</p>}
    </div>
  );
};

export default ContactForm;
