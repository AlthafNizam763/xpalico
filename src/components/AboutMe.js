import React from 'react';
import styled from 'styled-components';
import profile from '../assets/profile.jpg';

// Styled component for the About container
const AboutContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282c34;
  color: white;
  text-align: center;
  flex-direction: column; /* Keeps everything in a vertical column */
`;

// Add a wrapper for image and text to align them side by side
const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px; /* Adds space between the image and text */
  flex-direction: row; /* This aligns them horizontally */
`;

// Styled component for the profile image
const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

// Styled component for the text content
const TextContent = styled.div`
  max-width: 600px;
  text-align: left;
  font-size: 1.1rem;
`;

// Styled component for the skills container
const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
`;

// Styled component for each skill item
const Skill = styled.div`
  background-color: #ffffff;
  color: #333;
  padding: 15px 30px;
  border-radius: 50px;
  font-size: 1.1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const AboutMe = () => {
  return (
    <AboutContainer>
      {/* About Wrapper for Profile Image and Text */}
      <AboutWrapper>
        {/* Profile Image */}
        <ProfileImage src={profile} alt="Profile" />

        {/* Text Content */}
        <TextContent>
          <h2>About Me</h2>
          <p>
            I am a self-taught developer who is passionate about building interactive web applications with React. I enjoy solving complex problems, learning new technologies, and continuously improving my coding skills. My journey as a developer has been shaped by curiosity, perseverance, and a deep love for creating seamless user experiences.
          </p>
          <p>
            I thrive in environments that challenge me to think outside the box and push my limits. With a strong foundation in JavaScript, HTML, and CSS, I'm always exploring modern frameworks and libraries to stay up-to-date with the latest trends in web development. I’m also eager to collaborate with others, share knowledge, and contribute to open-source projects to grow as a developer.
          </p>
        </TextContent>
      </AboutWrapper>

      {/* Skills Section */}
      <h3>Skills & Technologies</h3>
      <SkillsContainer>
        <Skill>HTML5</Skill>
        <Skill>CSS3</Skill>
        <Skill>JavaScript</Skill>
        <Skill>Bootstrap</Skill>
        <Skill>jQuery</Skill>
        <Skill>React</Skill>
        <Skill> REST APIs</Skill>
        <Skill>PHP</Skill>
        <Skill>CodeIgniter</Skill>
      </SkillsContainer>
    </AboutContainer>
  );
};

export default AboutMe;