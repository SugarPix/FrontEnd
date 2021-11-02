import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --purple: #7d1ba6;
    --green: #32bda6;
    --gray: #ececec;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    color: var(--gray)
  }

  html, body, #__next {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--purple);
  }

  .bg-key {
    position: absolute;
    bottom: 0;
    left: -5vw;
    width: 20vw;
    opacity: 0.5;
  }
`;
