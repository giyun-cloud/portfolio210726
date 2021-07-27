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
  Tip,
} from "./ProjectsStyled";

function Projects2() {
  return (
    <Main>
      <Iframe
        src="https://cloud-wetube.herokuapp.com/"
        title="Project2"
      ></Iframe>
      <TextContainer>
        <H1>
          Wetube<Tip>(웹 로딩이 김 주의)</Tip>
        </H1>
        <StackContainer>
          <Stack>HTML5</Stack>
          <Stack>CSS3</Stack>
          <Stack>JavaScript</Stack>
          <Stack>MongoDB</Stack>
          <Stack>Node.js</Stack>
          <Stack>Pug</Stack>
        </StackContainer>
        <Text>
          ▶ 유튜브 클론/ 영상 녹화, 썸네일 이미지 생성 등등을 할 수 있는 웹
        </Text>
        <Text>
          ▶ 어떻게 해야 db에 최소의 정보만 저장해둘 수 있을지 고민을 많이 해보고
          해결해보는 경험을 얻음.
        </Text>
        <Text>
          ▶ ex) 프로필 사진 업데이트시 업데이트전 사진 삭제하기/ 영상 삭제시 그
          안에 있던 댓글들, 해당 영상에 user에 연결되어 있던 댓글들 삭제하기
          등등.
        </Text>
        <Text2>
          ● LINK :{" "}
          <A
            target="_blank"
            rel="noreferrer"
            href="https://cloud-wetube.herokuapp.com/"
          >
            https://cloud-wetube.herokuapp.com/
          </A>
        </Text2>
        <Text2>
          ● GITHUB :{" "}
          <A
            target="_blank"
            rel="noreferrer"
            href="https://github.com/giyun-cloud/wetube-practice"
          >
            https://github.com/giyun-cloud/wetube-practice
          </A>
        </Text2>
      </TextContainer>
    </Main>
  );
}

export default Projects2;
