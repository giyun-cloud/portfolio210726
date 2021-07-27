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

function Projects1() {
  return (
    <Main>
      <Iframe
        src="https://hardcore-bose-f5500a.netlify.app/"
        title="Project1"
      ></Iframe>
      <TextContainer>
        <H1>My habits</H1>
        <StackContainer>
          <Stack>HTML5</Stack>
          <Stack>CSS3</Stack>
          <Stack>JavaScript</Stack>
        </StackContainer>
        <Text>▶ 나의 습관들에 대한 생각들을 적은 웹</Text>
        <Text>
          ▶ CSS와JS를 이용해서 여러가지 기능 구현(책 넘기는 효과 등등)
        </Text>
        <Text2>
          ● LINK :{" "}
          <A
            target="_blank"
            rel="noreferrer"
            href="https://hardcore-bose-f5500a.netlify.app/"
          >
            https://hardcore-bose-f5500a.netlify.app/
          </A>
        </Text2>
        <Text2>
          ● GITHUB :{" "}
          <A
            target="_blank"
            rel="noreferrer"
            href="https://github.com/giyun-cloud/My-habits"
          >
            https://github.com/giyun-cloud/My-habits
          </A>
        </Text2>
      </TextContainer>
    </Main>
  );
}

export default Projects1;
