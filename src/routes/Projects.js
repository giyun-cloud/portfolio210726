import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Projects1 from "./project/Projects1";
import Projects2 from "./project/Projects2";
import Projects3 from "./project/Projects3";

const Main = styled.main`
  height: 85vh;
  background-color: #747d8c;
`;

function Projects({ location: { pathname } }) {
  const num = pathname.substr(-1);
  return (
    <>
      {num === "1" ? (
        <Projects1 />
      ) : num === "2" ? (
        <Projects2 />
      ) : (
        <Projects3 />
      )}
    </>
  );
}

export default withRouter(Projects);
