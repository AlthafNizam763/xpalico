import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import { FaBong } from 'react-icons/fa'; // Import FaBong from react-icons
import rightpic from '../assets/eee.png'; // Correctly import the image
import leftpic from '../assets/pain.png';
const Message = () => {
  const containerStyle = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f78c32', // Orange background color
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
  };

  const titleStyle = {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  const textStyle = {
    fontSize: '1.5rem',
    marginBottom: '2rem',
  };

  const navLinkStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    color: '#f78c32',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    gap: '0.5rem',
    transition: '0.3s ease',
  };

  const navLinkHoverStyle = {
    backgroundColor: '#f5a561',
    color: '#fff',
  };

  const imageStyle = {
    position: 'absolute',
    right: '1rem',
    top: '70%',
    transform: 'translateY(-50%)',
    width: '600px', // Adjust image width
    height: 'auto', // Maintain aspect ratio
    borderRadius: '10px', // Optional: Add rounded corners
  };
  const imageStyleLeft = {
    position: 'absolute',
    left: '0rem',
    top: '53%',
    transform: 'translateY(-50%)',
    width: '300px', // Adjust image width
    height: 'auto', // Maintain aspect ratio
    borderRadius: '10px', // Optional: Add rounded corners
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Message Me</h1>
      <p style={textStyle}>This is the Message page where users can send a message.</p>
      <NavLink
        to="http://localhost:3001/"
        style={({ isActive }) => (isActive ? navLinkHoverStyle : navLinkStyle)}
      >
        <FaBong /> Bong
      </NavLink>
      <img src={rightpic} alt="Right Side Image" style={imageStyle} /> 
      <img src={leftpic} alt="Left Side Image" style={imageStyleLeft} /> 
    </div>
  );
};

export default Message;
