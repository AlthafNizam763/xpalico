import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import profile from '../assets/logo2.gif'; 
import { FaHome, FaUser, FaProjectDiagram, FaComment, FaLocationArrow, FaEnvelope,FaAddressCard } from 'react-icons/fa'; // Added location and envelope icons

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

const TakeMeDropdown = styled.div`
  position: relative;
  
  &:hover {
    & > div {
      display: flex; /* Show the dropdown on hover */
    }
  }
`;

const DropdownIcons = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  gap: 15px;
  position: absolute;
  top: 30px;
  left: 0;
  background-color: #1c1c1c;
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Adding shadow for a dropdown look */
`;

const DropdownIcon = styled(Link)`
  color: #ffffff;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #00d1b2;
    transform: scale(1.1);
  }
`;

// Navbar component
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

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
        <NavLink to="/resume">
          <FaAddressCard /> Resume
        </NavLink>
        <TakeMeDropdown>
          <NavLink to="#" onClick={() => setShowDropdown(!showDropdown)}>
            <FaComment /> Get In Touch
          </NavLink>
          <DropdownIcons show={showDropdown}>
            <DropdownIcon to="/contact">
              <FaEnvelope />  
            </DropdownIcon>
            <DropdownIcon to="/location">
              <FaLocationArrow />   
            </DropdownIcon>
          </DropdownIcons>
        </TakeMeDropdown>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
