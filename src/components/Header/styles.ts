import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 6rem;
  background-color: ${props => props.theme["green-900"]};
  display: flex;
`;

export const HeaderNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  a {
    color: ${props => props.theme.white};
    border-bottom: 2px solid transparent;
    transition: color 0.3s;

    &:hover {
      padding-bottom: 0.5rem;
      border-bottom: 2px solid ${props => props.theme["green-300"]};
      color: ${props => props.theme["green-300"]};
    }
  }  
`;