import React, { useState } from 'react';
import ContactMeCard from '../components/ContactMeCard';
import './ContactMe.css';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });
      if (!res.ok) throw new Error('Failed to submit form');
      
      // Reset form and show success
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
    }

  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">Contact Me</h2>
        <p className="contact-subtitle">Let's connect and create something amazing together</p>
        <div className="contact-card-section">
          <ContactMeCard 
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            showSuccess={showSuccess}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

