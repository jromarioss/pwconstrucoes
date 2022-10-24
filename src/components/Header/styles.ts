import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 4rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: ${props => props.theme["green-900"]};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 728px) {
    padding-inline: 3rem;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    height: 6rem;
  }

  @media (min-width: 1440px) {
    padding-inline: 5rem;
  }
`;

export const HeaderLogo = styled.div`
  display: none;

  @media (min-width: 728px) {
    display: block;
  }
`;

export const HeaderNav = styled.nav`
  color: ${props => props.theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  a {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid transparent;
    transition: color 0.3s;

    &:hover {
      padding-bottom: 0.5rem;
      border-bottom: 2px solid ${props => props.theme["green-300"]};
      color: ${props => props.theme["green-300"]};
    }
  }

  @media (min-width: 375px) {
    gap: 1.5rem;
  }

  @media (min-width: 425px) {
    gap: 2rem;
  }

  @media (min-width: 728px) {
    gap: 3rem;
  }
`;
