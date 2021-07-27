import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding-top: 2rem;
  background-color: #2d3436;
  border-radius: 1rem;
  width: 4rem;
  height: 4rem;
  font-weight: 900;
  top: -2.5rem;
  right: 50%;
  transition: 0.5s;
  opacity: 0.7;
  &:hover {
    top: -1.8rem;
    padding-top: 1rem;
    font-size: 1.2rem;
    opacity: 1;
  }
`;

function Homebtn() {
  return <HomeBtn to="/">Home</HomeBtn>;
}

export default Homebtn;
