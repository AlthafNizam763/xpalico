import React from 'react';
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

const Navbar = () => {
  return (
    <NavbarContainer>
        <Logo src={profile} alt="Profile" />
      <NavLinks>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
        <Link to="/projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</Link>
        <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
