import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const SFooter = styled.footer`
  display: flex;
  width: 100vw;
`;

const Container = styled.div`
  flex: 1;
  &:not(:last-child) {
    border-right: 1px solid #b2bec3;
  }
  background-color: ${(props) =>
    props.current === props.children.props.to
      ? props.current === "/aboutme"
        ? "#57606f"
        : "#747d8c"
      : null};
  border-top: 1px solid
    ${(props) =>
      props.current === props.children.props.to
        ? props.current === "/aboutme"
          ? "#57606f"
          : "#747d8c"
        : props.children.props.to === undefined
        ? "#747d8c"
        : null};
  height: 15vh;
  display: flex;
`;

const Content = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 1.8rem;
  text-shadow: 0 0 1px #000, 0 0 2px #333;
`;
const SmallContent = styled(Link)`
  &:not(:last-child) {
    border-right: 1px solid #b2bec3;
  }
  background-color: ${(props) =>
    props.current === props.to ? "#747d8c" : "#2d3436"};
  border-top: 1px solid
    ${(props) => (props.current === props.to ? "#747d8c" : null)};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  font-size: 1.4rem;
  text-shadow: 0 0 1px #000, 0 0 2px #333;
`;

function Footer({ location: { pathname } }) {
  return (
    <SFooter>
      <Container current={pathname}>
        <Content to="/aboutme">About Me</Content>
      </Container>
      <Container current={pathname}>
        {pathname.substr(0, 9) === "/projects" ? (
          <>
            <SmallContent current={pathname} to="/projects1">
              My habits
            </SmallContent>
            <SmallContent current={pathname} to="/projects2">
              Wetube
            </SmallContent>
            <SmallContent current={pathname} to="/projects3">
              Portfolio
            </SmallContent>
          </>
        ) : (
          <Content to="/projects1">Projects</Content>
        )}
      </Container>
    </SFooter>
  );
}

export default withRouter(Footer);
