import React from 'react';
import styled from 'styled-components';
import rightpic from '../assets/Miky.png'; 
import leftpic from '../assets/Minato.png'; 

const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #333;
  color: white;
  text-align: center;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  width: 100px; // Adjust the width as needed
`;

const RightImage = styled(Image)`
  right: 1px;
  bottom: 1px;
`;

const LeftImage = styled(Image)`
  left: 1px;
  bottom: 1px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 My Website. All Rights Reserved.</p>
      <RightImage src={rightpic} alt="Right Side Image" />
      <LeftImage src={leftpic} alt="Left Side Image" />
    </FooterContainer>
  );
};

export default Footer;
