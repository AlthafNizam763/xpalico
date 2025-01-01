import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import profile from '../assets/logo2.gif'; 
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'; 

// Styled components for Navbar container and links
const NavbarContainer = styled.nav`
  background-color: #1c1c1c; /* Darker background for contrast */
  padding: 10px 30px; /* Increased padding for better spacing */
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Adding a shadow for a sleek look */
`;

const NavLinks = styled.div`
  display: flex;
  gap: 25px; /* Increased gap for spacing between links */
`;

const Logo = styled.img`
  width: 130px; /* Adjusted logo size */
  height: auto;
  border-radius: 50%; /* Added circular shape to the logo */
  margin-left: 10px;
`;

const NavLink = styled(Link)`
  color: #ffffff; /* White text color */
  text-decoration: none;
  font-weight: bold;
  font-size: 1.3em; /* Increased font size for better readability */
  display: flex;
  align-items: center;
  gap: 8px; /* Adjusted gap between icon and text */
  transition: color 0.3s ease, transform 0.3s ease; /* Added transition for scaling effect */

  &:hover {
    color: #00d1b2; /* Hover color */
    transform: scale(1.1); /* Slight scale effect on hover */
  }
`;

// Navbar component
const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo src={profile} alt="Profile" />
      <NavLinks>
        <NavLink to="/">
          <FaHome /> Home
        </NavLink>
        <NavLink to="/about">
          <FaUser /> About
        </NavLink>
        <NavLink to="/projects">
          <FaProjectDiagram /> Projects
        </NavLink>
        <NavLink to="/contact">
          <FaEnvelope /> Contact
        </NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
