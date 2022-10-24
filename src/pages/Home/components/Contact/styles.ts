import styled from "styled-components";

export const ContactContainer = styled.section`
  padding: 1rem;
  height: calc(100vh - 6rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
  gap: 5rem;

  h2 {
    font-size: 2rem;
  }

  iframe {
    border: 0;
    width: 100%;
    height: 19rem;
  }

  @media (min-width: 375px) {
    iframe {
      height: 22rem;
    }
  }

  @media (min-width: 425px) {
    iframe {
      height: 25rem;
    }
  }

  @media (min-width: 728px) {
    iframe {
      height: 28rem;
    }
  }

  @media (min-width: 1024px) {
    padding: 0;
    width: 60rem;

    h2 {
    font-size: 3rem;
  }

    iframe {
      width: 28rem;
    }
  }

  @media (min-width: 1440px) {
    padding: 0;
    width: 70rem;

    iframe {
      width: 30rem;
    }
  }
`;

export const ContactContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;

    iframe {
      width: 30rem;
    }
  }

  @media (min-width: 1440px) {
    iframe {
      width: 35rem;
    }
  }
`;

export const ContactDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 1024px) {
    display: flex;
    width: 30rem;
    height: 28rem;
  }

  @media (min-width: 1440px) {
    width: 35rem;
  }
`;

export const ContactIcons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  a {
    width: 5rem;
    height: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border-radius: 6px;
    border: 1px solid ${props => props.theme["gray-600"]};
    text-decoration: none;

    p {
      font-size: 0.75rem;
      font-weight: bold;
      color: ${props => props.theme["base-text"]};
    }

    img {
      width: 2rem;
    }
  };

  @media (min-width: 425px) {
    a {
      width: 6rem;
      height: 7rem;
    }
  }

  @media (min-width: 725px) {
    justify-content: center;
    gap: 3rem;

    a {
      width: 7rem;
      height: 8rem;
    }
  }


  @media (min-width: 1024px) {
    a {
      width: 7rem;
      height: 8rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      border-radius: 6px;
      border: 1px solid ${props => props.theme["gray-600"]};
      text-decoration: none;

      p {
        font-weight: bold;
        color: ${props => props.theme["base-text"]};
      }

      img {
        width: 3rem;
      }
    };
  }
  

  .gmail {
    transition: background-color 0.3s;
  }

  .gmail:hover {
    background-color: #EA4335;
  }

  .whatsapp {
    transition: background-color 0.3s;
  }

  .whatsapp:hover {
    background-color: #40C351;
  }

  .instagram {
    transition: background-color 0.3s;
  }

  .instagram:hover {
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
  }
`;