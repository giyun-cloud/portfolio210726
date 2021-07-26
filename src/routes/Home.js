import React from "react";
import styled from "styled-components";

const Main = styled.main`
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.7;
  font-size: 1.2rem;
`;

const Bold = styled.b`
  display: block;
  text-shadow: 0px 0px 5px #dfe4ea;
`;

function Home() {
  return (
    <Main>
      <p>
        안녕하십니까?
        <Bold> 저는 매년 배로 발전하는 남기윤 입니다. </Bold>
        이것은 '되겠다' 는 결심이 아닌 '된다' 는 확신입니다.
      </p>
    </Main>
  );
}

export default Home;
