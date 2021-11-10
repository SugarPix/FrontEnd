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
    background-image: linear-gradient(to top right, #32bcad, #7d1ba6, #35126a);
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

  #not-match * {
    color: red;
  }

  .Toastify__toast-theme--light {
    background-color: var(--green);
    opacity: 0.6;
    transition: opacity 0.4s;
  }

  .Toastify__toast--success {
    background: var(--green);
    opacity: 1;
  }

  .Toastify__toast--error {
    background: red;
    opacity: 1;
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

  @media (min-width: 480px) {
    .Toastify__toast-container {
      width: 90%;
      max-width: 418px;
    }
  }
`;

export const Page = styled.div`
  width: 90%;
  max-width: 750px;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 7.5rem;

  main {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export const LoadingContainer = styled.div`
  flex: 1;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
