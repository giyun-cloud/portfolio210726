import React from "react";
import styled from "styled-components";

const Main = styled.main`
  height: 85vh;
  background-color: #57606f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.7;
  font-size: 1.2rem;
  text-shadow: 0 0 5px #eccc68;
`;
const Paragrpahs = styled.div`
  margin-bottom: 1rem;
`;

const A = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;

const Tip = styled.small`
  font-size: 0.7rem;
  color: #ced6e0;
  text-shadow: none;
`;

function AboutMe() {
  return (
    <Main>
      <Paragrpahs>
        <p>
          ▪ 저는 코딩을 매일 할 수 있는 인내력이 있습니다.
          <Tip>(깃허브와 블로그에서 확인 가능)</Tip>
        </p>
        <p>▪ 저는 어려운 문제를 포기하지 않고, 해결해 내는 근성이 있습니다.</p>
        <p>▪ 주요 스택 : JS, HTML5, CSS3(SCSS), React</p>
        <p>
          ▪ 링크 :&nbsp;
          <A
            target="_blank"
            rel="noreferrer"
            href="https://blog.naver.com/giyun2253"
          >
            개발 블로그
          </A>
          &nbsp; /&nbsp;
          <A
            target="_blank"
            rel="noreferrer"
            href="https://github.com/giyun-cloud"
          >
            깃 허브
          </A>
        </p>
      </Paragrpahs>
    </Main>
  );
}

export default AboutMe;
