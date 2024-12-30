import React from 'react';
import styled from 'styled-components';

// Import the profile image
import profile from '../assets/profile.jpg';  // Adjust the path based on where your image is located

// Styled component for the Hero container
const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282c34;
  color: white;
  text-align: center;
  flex-direction: column; 
`;

// Styled component for the profile image
const ProfileImage = styled.img`
  width: 150px; 
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px; 
`;

// Hero section component
const HeroSection = () => {
  return (
    <HeroContainer>
      {/* Profile Image */}
      <ProfileImage src={profile} alt="Profile" />
      
      {/* Text content */}
      <div>
        <h2>Hello, I'm XPALICO</h2>
        <p>I am a passionate Software Developer</p>
      </div>
    </HeroContainer>
  );
};

export default HeroSection;
