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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
  a{
    text-decoration: none;
    color: #ffffff;
  }
  *{
    box-sizing: border-box;
  }
  @media screen and (max-width: 1080px) { html { font-size: 12px; } }
  @media screen and (max-width: 680px) { html { font-size: 8px; } }
`;

export default GlobalStyle;
