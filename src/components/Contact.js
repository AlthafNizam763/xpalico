import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaInstagram, FaWhatsapp, FaFacebook, FaLinkedin, FaPinterest, FaDribbble, FaPaperPlane } from 'react-icons/fa';

// Styled component for the Contact container with fade-in animation
const ContactContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282c34;
  color: white;
  text-align: center;
  flex-direction: column;
  padding: 20px;
  animation: fadeIn 1s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

// Styled component for the form
const ContactForm = styled.form`
  background-color: #444;
  padding: 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  animation: slideIn 0.5s ease-out;

  @keyframes slideIn {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

// Styled component for the form input fields with focus animation
const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  background-color: #333;
  color: white;
  &::placeholder {
    color: #bbb;
  }

  &:focus {
    outline: none;
    background-color: #2575fc;
    transition: background-color 0.3s ease;
  }
`;

// Styled component for the text area with focus animation
const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  background-color: #333;
  color: white;
  &::placeholder {
    color: #bbb;
  }

  &:focus {
    outline: none;
    background-color: #2575fc;
    transition: background-color 0.3s ease;
  }
`;

// Styled component for the submit button with hover animation
const SubmitButton = styled.button`
  background-color: #2575fc;
  color: white;
  padding: 15px 30px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, transform 0.3s ease;
  position: relative; /* Needed for absolute positioning of the icon */

  &:hover {
    background-color: #6a11cb;
    transform: scale(1.05);
  }

  svg {
    margin-left: 10px; /* Space between text and icon */
    transition: transform 0.5s ease, opacity 0.5s ease;
  }

  &.clicked svg {
    transform: translateX(10px) rotate(15deg); /* Icon will move and rotate when clicked */
    opacity: 0; /* Make it disappear after the click */
  }
`;

// Styled component for the social media links
const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SocialMediaIcon = styled.a`
  color: white;
  font-size: 2rem;
  margin: 0 10px;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    color: #2575fc;
    transform: scale(1.2) rotate(15deg); /* Add rotation and scaling animation */
  }

  &:focus {
    outline: none;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [clicked, setClicked] = useState(false); // Track button click state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setClicked(true); // Set clicked to true when the button is pressed

    try {
      const response = await fetch('http://localhost:5000/send-email', { // Update this URL if the backend is deployed
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert('Your message has been sent successfully!');
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send the message. Please try again later.');
    }

    setFormData({ name: '', email: '', message: '' }); // Reset the form data
    setTimeout(() => setClicked(false), 1000); // Reset the button animation
  };

  return (
    <ContactContainer>
      <h2>Contact Me</h2>
      <ContactForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        />
        <SubmitButton type="submit" className={clicked ? 'clicked' : ''}>
          Send Message
          <FaPaperPlane />
        </SubmitButton>
      </ContactForm>
      <SocialMediaContainer>
        <SocialMediaIcon href="mailto:alraravuthar012@gmail.com" aria-label="Email">
          <FaEnvelope />
        </SocialMediaIcon>
        <SocialMediaIcon href="https://www.instagram.com/xpalico" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </SocialMediaIcon>
        <SocialMediaIcon href="https://wa.me/9633146330" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        </SocialMediaIcon>
        <SocialMediaIcon href="https://www.facebook.com/xpalico" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook />
        </SocialMediaIcon>
        <SocialMediaIcon href="https://www.linkedin.com/in/xpalico" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </SocialMediaIcon>
        <SocialMediaIcon href="https://www.pinterest.com/xpalico" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
          <FaPinterest />
        </SocialMediaIcon>
        <SocialMediaIcon href="https://dribbble.com/xpalico" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
          <FaDribbble />
        </SocialMediaIcon>
      </SocialMediaContainer>
    </ContactContainer>
  );
};

export default Contact;
