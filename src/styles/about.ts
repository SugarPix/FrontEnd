import styled from "styled-components";

export const AboutMain = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  * {
    text-align: center;
  }

  * + * {
    margin-top: 1rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: 300;
  }

  b {
    font-weight: 600;
  }

  & > b {
    font-size: 1.5rem;
    color: var(--green);
    font-weight: 500;
  }

  p {
    font-size: 1.15rem;
    font-weight: 200;
  }
`;
