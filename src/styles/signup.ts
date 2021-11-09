import styled from "styled-components";

export const SignupMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;

  h1 {
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 2.5rem;
    text-align: center;

    b {
      font-weight: 600;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * + * {
    margin-top: 1.5rem;
  }

  input,
  textarea {
    background: white;
    border-radius: 0.2rem;
    color: black;
    font-weight: 300;
    font-family: "Montserrat", sans-serif;
    outline: none !important;
    border: 0;
    padding: 0.5rem 1rem;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    transition: box-shadow 0.4s;
    width: 100%;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    input {
      width: 47.5%;
    }
  }

  *::placeholder {
    color: black;
    font-weight: 300;
    font-family: "Montserrat", sans-serif;
    opacity: 0.36;
  }

  input:focus,
  textarea:focus {
    box-shadow: white 0px 0px 0px 4px;
  }

  button {
    width: 80%;
    color: white;
    background: var(--green);
    border-radius: 0.4rem;
    letter-spacing: 1px;
    border: 0;
    font-weight: 500;
    font-size: 1.5rem;
    padding: 0.8rem 0;
    text-align: center;
    transition: transform 0.4s, background 0.4s;
    max-width: 400px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    margin-top: 3rem;
  }

  button:hover {
    transform: scale(1.1, 1.1);
  }

  button:focus {
    background: #34cb79;
  }

  input[type="file"] {
    display: none;
  }

  label {
    padding: 1rem;
    width: 100%;
    max-width: 300px;
    font-family: "Montserrat", sans-serif;
    background-color: white;
    border-radius: 0.2rem;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    cursor: pointer;
    transition: filter 0.4s;

    &:hover {
      filter: brightness(0.8);
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 0.9rem;

      &#chosen {
        color: var(--green);

        svg * {
          color: var(--green);
        }
      }

      &#not-chosen {
        color: rgba(0, 0, 0, 0.36);

        svg * {
          color: rgba(0, 0, 0, 0.36);
        }
      }
    }

    svg {
      margin-bottom: 0.5rem;
    }
  }
`;
