import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 90%;
    max-width: 750px;
    padding: 2rem 0;

    .navbar-nav a {
      text-align: right;
      color: var(--gray);
      padding: 0 !important;
    }

    .navbar-nav {
      @media (min-width: 992px) {
        a + a {
          margin-left: 1.5vw;
        }
      }
    }

    @media (max-width: 992px) {
      .navbar-collapse {
        margin-top: 2vw;
      }

      .navbar-nav a {
        margin-top: 3vw;
      }
    }
  }

  div {
    justify-content: right;
  }

  .navbar-toggler {
    color: var(--gray);
    border-color: var(--gray);
    border-width: 3px;
    border-radius: 50%;
    height: 3rem;
    width: 3rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    box-shadow: none !important;

    @media (min-width: 992px) {
      display: none;
    }
  }

  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgb(236, 236, 236)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='3' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }
`;

export const Logo = styled.img`
  width: 8rem;
  height: 3rem;
  object-fit: cover;
`;
