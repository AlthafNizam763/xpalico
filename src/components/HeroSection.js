import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../assets/logo2.gif'; // Import your logo
import profile from '../assets/profile.jpg'; // Import the profile image
import introAudio from '../assets/intro.mp3'; // Import the intro audio file

// Keyframe animation for intro logo
const fadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.2);
  }
`;

// Styled component for intro container
const IntroContainer = styled.div`
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

// Styled component for animated logo
const AnimatedLogo = styled.img`
  width: 150px;
  height: auto;
  animation: ${fadeInOut} 3s ease-in-out forwards;
`;

// Styled component for hero container
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

// Styled component for profile image
const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

// Main App Component
const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const audioRef = useRef(new Audio(introAudio)); // Create a reference for the audio element

  useEffect(() => {
    // Play audio when the component mounts, and ensure it's not paused immediately
    audioRef.current.play().catch((error) => {
      // Handle errors if autoplay fails, like on mobile browsers
      console.error('Audio play failed:', error);
    });

    const timer = setTimeout(() => {
      setShowIntro(false); // Hide intro animation after 3 seconds
      audioRef.current.pause(); // Pause the audio after the intro animation finishes
    }, 3000); // The same duration as the intro animation

    return () => {
      clearTimeout(timer);
      audioRef.current.pause(); // Make sure to pause the audio when the component unmounts
    };
  }, []);

  return (
    <>
      {/* Intro Animation */}
      <IntroContainer isVisible={showIntro}>
        <AnimatedLogo src={logo} alt="Intro Logo" />
      </IntroContainer>

      {/* Hero Section */}
      {!showIntro && (
        <HeroContainer>
          {/* Profile Image */}
          <ProfileImage src={profile} alt="Profile" />
          
          {/* Text content */}
          <div>
            <h2>Hello, I'm XPALICO</h2>
            <p>I am a passionate Software Developer</p>
          </div>
        </HeroContainer>
      )}
    </>
  );
};

export default App;
