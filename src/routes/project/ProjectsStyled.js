import styled from "styled-components";

export const Main = styled.main`
  height: 85vh;
  background-color: #747d8c;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Iframe = styled.iframe`
  width: 40rem;
  height: 30rem;
  border: 2px solid #fff;
  border-radius: 1rem;
`;
export const TextContainer = styled.div`
  margin-left: 5rem;
  width: 40rem;
`;
export const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

export const StackContainer = styled.div`
  margin: 0.5rem 0 1rem -0.5rem;
`;
export const Stack = styled.span`
  background-color: #2f3542;
  display: inline-block;
  padding: 0.3rem 0.6rem;
  margin: 0 0.2rem;
  border-radius: 1rem;
`;
export const Text = styled.div`
  line-height: 1.5;
  word-break: keep-all;
`;
export const Text2 = styled.div`
  line-height: 1.3;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  color: #f1f2f6;
`;
export const A = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;
export const Tip = styled.small`
  font-size: 0.7rem;
  color: #ced6e0;
  text-shadow: none;
`;
