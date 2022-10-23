import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100vw;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 425px) {
    img {
      width: 250px;
    }
  }
`;