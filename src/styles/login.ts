import styled from "styled-components";

export const LoginMain = styled.main`
  z-index: 2;
  min-height: 60vh;
  width: 100%;
  max-width: 100vw;
  border-radius: 0 0 3rem 3rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 6px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 2.25rem;

  h1 {
    font-size: 1.5rem;
    color: black;
    font-weight: 500;
    letter-spacing: 1px;

    span {
      color: var(--purple);
      font-weight: 400;

      b {
        font-weight: 500;
        color: var(--purple);
      }
    }
  }

  form {
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      color: black;
      margin-right: auto;
      margin-bottom: 0.35rem;
      font-family: "Montserrat", sans-serif;
    }

    div {
      width: 100%;
      margin-bottom: 0.75rem;

      input {
        width: 100%;
        border-radius: 0.35rem;
        border: 1.5px solid rgba(0, 0, 0, 0.4);
        color: black;
        font-size: 0.85rem;
        transition: box-shadow 0.4s;

        padding: 0.5rem;
        padding-left: 2.5rem;

        &::placeholder {
          color: rgba(0, 0, 0, 0.6);
          font-size: 0.85rem;
        }

        &:focus {
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 1px,
            rgba(51, 51, 51, 0.4) 0px 0px 0px 1px;
          outline: none;
        }
      }
    }

    .input-wrapper {
      position: relative;

      svg {
        position: absolute;

        top: 50%;
        transform: translateY(-50%);
        margin-left: 14px;

        * {
          color: black;
        }
      }
    }

    .opts-container {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;

      a {
        font-size: 0.75rem;
        color: var(--green);
        text-decoration: underline;
        transition: filter 0.4s;
      }

      a:hover {
        filter: brightness(0.8);
      }

      div {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: unset;

        label {
          margin: 0;
          font-size: 0.7rem;
        }

        input {
          width: 0.9rem;
          height: 0.9rem;
          margin-right: 0.35rem;
          box-shadow: none;
        }
      }
    }

    button.submit {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      color: black;
      background-color: var(--green);

      width: 50%;
      border-radius: 0.4rem;
      border: 0;
      padding: 0.5rem 0.25rem;

      font-size: 0.85rem;
      letter-spacing: 0.3px;

      transition: transform 0.4s;

      svg {
        margin-right: 0.25rem;

        * {
          color: black;
        }
      }
    }

    button:hover {
      transform: scale(1.1, 1.1);
    }
  }

  div.signup {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;

    width: 100%;
    max-width: 250px;

    p {
      font-size: 0.85rem;
      color: black;
      font-weight: 300;
      text-align: center;
    }

    a {
      background-color: var(--purple);
      color: white;
      font-size: 0.95rem;
      text-align: center;
      text-decoration: none;

      width: 100%;
      border-radius: 0.4rem;
      border: 0;
      padding: 0.5rem 0.25rem;

      transition: transform 0.4s;

      &:hover {
        transform: scale(1.1, 1.1);
      }
    }
  }

  @media (min-width: 1025px) {
    height: 100vh;
    width: 50vw;
    max-width: unset;
    justify-content: center;

    margin-right: auto;
    border-radius: 0 3rem 3rem 0;

    padding-right: 16%;

    h1 {
      margin-left: auto;
      max-width: 400px;
      width: 100%;
    }

    form {
      margin-left: auto;
    }

    div.signup {
      position: absolute;
      width: 30vw;
      max-width: 300px;

      top: 5vh;
      right: 5vw;

      p {
        color: white;
        font-size: 1.15rem;
      }

      a {
        background-color: var(--green);
        font-weight: 700;
        font-size: 1.15rem;
        letter-spacing: 0.5px;
      }
    }
  }
`;

export const Background = styled.img`
  z-index: 1;
  position: absolute;

  bottom: -5vh;
  max-height: 35vh;

  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 1025px) {
    max-height: unset;
    bottom: 0;
    right: 0;
    width: 45vw;
    max-height: 70vh;
    object-fit: contain;
    transform: unset;
    left: unset;
  }
`;
