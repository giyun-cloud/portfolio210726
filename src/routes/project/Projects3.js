import React from "react";
import {
  Iframe,
  Main,
  TextContainer,
  H1,
  Stack,
  StackContainer,
  Text,
  Text2,
  A,
} from "./ProjectsStyled";

function Projects3() {
  return (
    <Main>
      <Iframe
        src="https://cranky-almeida-b598ca.netlify.app/projects3"
        title="Project3"
      ></Iframe>
      <TextContainer>
        <H1>Portfolio</H1>
        <StackContainer>
          <Stack>HTML5</Stack>
          <Stack>CSS3</Stack>
          <Stack>ReactJS</Stack>
          <Stack>Styled-components</Stack>
        </StackContainer>
        <Text>▶ 리액트를 이용해 만든 포트폴리오</Text>
        <Text>▶ react-router-dom과 styled-component를 이용해서 만듬.</Text>
        <Text2>
          ● LINK :{" "}
          <A
            target="_blank"
            rel="noreferrer"
            href="https://cranky-almeida-b598ca.netlify.app/projects3"
          >
            https://cranky-almeida-b598ca.netlify.app/projects3
          </A>
        </Text2>
        <Text2>
          ● GITHUB :{" "}
          <A
            target="_blank"
            rel="noreferrer"
            href="https://github.com/giyun-cloud/portfolio210726"
          >
            https://github.com/giyun-cloud/portfolio210726
          </A>
        </Text2>
      </TextContainer>
    </Main>
  );
}

export default Projects3;
