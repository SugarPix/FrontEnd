import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 0.8rem;
  padding: 2.5rem;
  padding-bottom: 0.75rem;
  background: var(--gray);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  width: 100%;

  & + div {
    margin-top: 2rem;
  }

  * {
    color: black;
  }

  #insta * {
    color: rgb(125, 27, 166);
  }

  .bio {
    margin: 0;
    margin-top: 1.75rem;
    transition: font-size 0.3s;
    font-weight: 400;
    font-family: "Montserrat", sans-serif;
  }

  .pix-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: var(--gray);

    * {
      margin: 0;
    }

    img {
      width: 25%;
      border-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    }

    div {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h3 {
        font-size: 1.5rem;
      }

      p {
        margin-top: 0.5rem;
        font-size: 1rem;
        font-weight: 300;
        width: 100%;
      }

      a {
        margin-top: 0.5rem;
        font-size: 1rem;
        color: var(--purple);
        text-decoration: none;
        font-weight: 400;
      }

      button {
        margin-top: 1rem;
        outline: none;
        border: 0;
        border-radius: 0.4rem;
        background-color: var(--green);
        color: var(--gray);
        padding: 0.45vw 1.5vw;
        font-size: 0.85rem;
        font-weight: 600;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
          rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
      }
    }

    @media (max-width: 700px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;

      p {
        text-align: center;
      }

      img {
        width: 40%;
      }

      div {
        align-items: center;
        padding-top: 1rem;
        width: 100%;
        p {
          width: 100%;
        }

        button {
          padding: 1vw 3vw;
          font-size: 1rem;
        }
      }
    }
  }

  @media (max-width: 700px) {
    p {
      text-align: center;
    }
  }
`;
