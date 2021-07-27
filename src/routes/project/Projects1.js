import React from "react";
import styled from "styled-components";

const Main = styled.main`
  height: 85vh;
  background-color: #747d8c;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Iframe = styled.iframe`
  width: 40rem;
  height: 30rem;
  border: 2px solid #fff;
  border-radius: 1rem;
`;
const TextContainer = styled.div`
  margin-left: 10rem;
`;
const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
`;

function Projects1() {
  return (
    <Main>
      <Iframe
        src="https://hardcore-bose-f5500a.netlify.app/"
        title="Project1"
      ></Iframe>
      <TextContainer>
        <H1>My habit</H1>
      </TextContainer>
    </Main>
  );
}

export default Projects1;
