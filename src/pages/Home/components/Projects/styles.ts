import styled from "styled-components";

export const ProjectsContainer = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding-inline: 1rem;
  
  @media (min-width: 425px) {
    padding-inline: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding-inline: 0;
    padding-top: 3.5rem;
    width: 60rem;
    margin: auto;

    h2 {
      font-size: 3rem;
    }
  }

  @media (min-width: 1440px) {
    width: 70rem;
  }
  `;

export const ProjectsImg = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  img {
    width: 100%;
  }

  @media (min-width: 728px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.5rem;
    
    img {
      width: 20rem;
    }
  }

  @media (min-width: 1024px) {
    img {
      width: 27.5rem;
    }
  }
  
  @media (min-width: 1440px) {
    img {
      width: 32rem;
    }
  }
`;