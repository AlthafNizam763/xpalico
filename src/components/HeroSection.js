import React from 'react';
import styled from 'styled-components';

// Import the profile image
import profile from '../assets/profile1.jpg';  // Adjust the path based on where your image is located
// import leftpic from '../assets/AOT.png'; 
// import rightpic from '../assets/AOT1.png'; 
// Styled component for the Hero container
const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #f9f9f9, #1c1c1c); /* Gradient background */
  color: white;
  text-align: center;
  flex-direction: column;
  padding: 0 20px;  /* Padding added for mobile responsiveness */
`;

// Styled component for the profile image
const ProfileImage = styled.img`
  width: 180px; /* Increased the size of the profile image */
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #ffffff; /* Added a white border around the profile image */
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3); /* Added shadow for depth */
  margin-bottom: 30px;  /* Increased margin between image and text */
`;

// Styled component for the heading
const Heading = styled.h2`
  font-weight: bold;  
  font-size: 2.5em; /* Increased font size */
  margin-bottom: 10px; /* Added space between heading and paragraph */
  letter-spacing: 1px; /* Added letter-spacing for a clean, modern feel */
  text-transform: uppercase; /* Added uppercase styling for a bold statement */
`;

// Styled component for the paragraph
const Paragraph = styled.p`
  font-weight: bold;  
  font-size: 1.2em; /* Increased font size */
  max-width: 600px;  /* Set a maximum width for better readability */
  margin: 0 auto;  /* Center-align the text */
  line-height: 1.6; /* Increased line-height for better readability */
  letter-spacing: 0.5px;  /* Slight letter-spacing for clarity */
`;
// const Image = styled.img`
//   position: absolute;
//   width: 382px; // Adjust the width as needed
// `;

// const RightImage = styled(Image)`
//   right: 1px;
//   bottom: 10px;
// `;

// const LeftImage = styled(Image)`
//   left: 1px;
//   bottom: -100px;
// `;

// Hero section component
const HeroSection = () => {
  return (
    <HeroContainer>
      <ProfileImage src={profile} alt="Profile" />
      <div>
        <Heading>Hello, I'm ALTHAF N</Heading>
        <Paragraph>I am a passionate Software Developer, eager to learn and create amazing web applications. I specialize in building dynamic and interactive websites with modern technologies.</Paragraph>
      </div>
      {/* <LeftImage src={leftpic} alt="Left Side Image" />
      <RightImage  src={rightpic} alt="right Side Image" /> */}
    </HeroContainer>
    
  );
};

export default HeroSection;
