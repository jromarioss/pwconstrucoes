import styled from "styled-components";

export const AboutContainer = styled.section`
  margin: auto;
  height: calc(100vh - 4rem);
  padding-inline: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    display: none;
  }

  h2 {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 0.875rem;
    text-align: justify;
    line-height: 1.5;
  }

  @media (min-width: 425px) {
    padding: 1.5rem;

    h2 {
      font-size: 1.875rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (min-width: 728px) {
    padding: 2rem;
  }

  @media (min-width: 1024px) {
    width: 60rem;
    margin-top: 7rem;
    flex-direction: row;
    justify-content: space-between;   
    padding-inline: 0;

    p {
      font-size: 1.25rem;
    }

    img {
      display: block;
      width: 21.875rem;
      height: auto;
    }

    div {
      width: 25rem;
    }  
  }

  @media (min-width: 1440px) {
    width: 70rem;

    img {
      width: 25rem;
      height: 35rem;
    }

    div {
      width: 27rem;
    }
  }
`;






