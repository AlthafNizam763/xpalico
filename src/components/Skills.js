import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  padding: 50px;
  background-color: #f4f4f4;
  text-align: center;
`;

const Skills = () => {
  return (
    <SkillsContainer>
      <h2>Skills</h2>
      <p>React, JavaScript, HTML, CSS, Node.js, Git, Firebase, REST APIs</p>
    </SkillsContainer>
  );
};

export default Skills;
