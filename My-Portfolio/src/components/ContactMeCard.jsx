import React from 'react';
import './ContactMeCard.css';

const ContactMeCard = ({ formData, handleChange, handleSubmit, showSuccess }) => {
  return (
    <div className="contact-card-container">
      <div className="contact-form-card">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              placeholder="Your name"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              placeholder="your.email@example.com"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              placeholder="Tell me about your project or just say hello!"
              rows="5"
              required
            />
          </div>
          
          <button type="submit" className="submit-button">
            SEND MESSAGE
          </button>
          
          {/* Success Notification */}
          {showSuccess && (
            <div className="notification success">
              <div className="notification-content">
                <span className="notification-icon">✓</span>
                <span className="notification-message">Thank you! Your message has been sent successfully.</span>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactMeCard;
