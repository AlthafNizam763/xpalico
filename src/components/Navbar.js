import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import profile from '../assets/logo2.gif'; // Import the profile image

// Styled components for Navbar container and links
const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative; /* Allow positioning of the center date/time */
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const Logo = styled.img`
  width: 150px; /* Adjust the logo size */
  height: auto;
  margin-left: 10px; /* Add spacing between title and logo */
`;

const DateTimeContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:rgb(255, 255, 255); /* Yellow color */
  font-size: 1.2rem;
  font-weight: bold;
  text-shadow: 0 0 10pxrgb(224, 224, 221), 0 0 15pxrgb(223, 222, 219), 0 0 20pxrgb(212, 212, 209);
  z-index: 1; /* Ensure it's above other content */
  text-align: center;
`;

// Navbar component
const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  // Format time
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  // Format date
  const day = currentTime.getDate();
  const month = currentTime.toLocaleString('default', { month: 'long' });
  const year = currentTime.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;

  return (
    <NavbarContainer>
      <Logo src={profile} alt="Profile" />
      <NavLinks>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
        <Link to="/projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</Link>
        <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
      </NavLinks>

      {/* Live Date and Time Display */}
      <DateTimeContainer>
        <div>{formattedDate}</div>
        <div>{formattedTime}</div>
      </DateTimeContainer>
    </NavbarContainer>
  );
};

export default Navbar;
