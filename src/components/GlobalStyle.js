import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  html{
    font-size: 16px;
  }
  body{
    background-color: #2d3436;
    color: #ffffff;
  }
  a{
    text-decoration: none;
    color: #ffffff;
  }
  *{
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
