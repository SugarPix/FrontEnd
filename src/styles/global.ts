import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --purple: #7d1ba6;
    --green: #32bcad;
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
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--purple);
    overflow-x: hidden;
  }

  .bg-key {
    position: absolute;
    bottom: 0;
    left: -5vw;
    width: 20vw;
    opacity: 0.5;
  }
  
  main {
    width: 100%;
    max-width: 750px;
  }

  .Toastify__toast--success {
    background: var(--green);
  }

  .Toastify__toast--error {
    background: red;
  }

  .Toastify__toast--success *,
  .Toastify__toast--error * {
    color: var(--gray);
    font-size: 0.85rem;
    fill: var(--gray) !important;
    opacity: 1!important;
  }

  .Toastify__progress-bar--success {
    background: var(--gray);
  }
`;

export const Page = styled.div`
  width: 90%;
  max-width: 750px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 7.5rem;
`;
