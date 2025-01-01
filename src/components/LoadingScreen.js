import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../assets/logo2.gif'; // Replace with your logo path

// Keyframes for fade-out animation
const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
  }
`;

// Styled component for the loading screen container
const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000; /* Black background for dramatic effect */
  z-index: 9999;
  animation: ${(props) => (props.isFading ? fadeOut : 'none')} 1.5s forwards;
`;

// Styled component for the logo
const Logo = styled.img`
  width: 150px; /* Adjust logo size */
  height: auto;
`;

const LoadingScreen = ({ onComplete }) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Timeout to simulate loading and trigger fade-out
    const timeout = setTimeout(() => {
      setIsFading(true); // Start fade-out animation
      setTimeout(onComplete, 1500); // Call onComplete after fade-out
    }, 3000); // Adjust the duration as needed (3 seconds here)

    return () => clearTimeout(timeout); // Clean up the timeout
  }, [onComplete]);

  return (
    <LoadingContainer isFading={isFading}>
      <Logo src={logo} alt="Loading Logo" />
    </LoadingContainer>
  );
};

export default LoadingScreen;
