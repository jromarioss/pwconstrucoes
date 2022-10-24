import styled from "styled-components";

export const FooterContainer = styled.footer`
  color: ${prosp => prosp.theme.white};
  background-color: ${prosp => prosp.theme["gray-700"]};
  font-size: 0.75rem;
  padding: 1rem;
  padding-top: 2rem;
  text-align: center;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterContent = styled.footer`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media (min-width: 425px) {
    flex-direction: row;
    gap: 1.5rem;

    div {
      p {
        text-align: left;
      }
    }
  }

  @media (min-width: 728px) {
    gap: 2rem;

    p {
      margin-bottom: 0.5rem;
    }
  }
`;

export const FooterBottom = styled.footer`
  margin-top: 1rem;
`;