import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  margin-top: 4rem;

  img {
    width: 100%;
    height: 18rem;

    @media (min-width: 375px) {
      height: 23rem;
    }
    
    @media (min-width: 425px) {
      height: 26rem;
    }
    
    @media (min-width: 728px) {
      height: 30rem;
    }
    
    @media (min-width: 1024px) {
      height: 32rem;
      
    }
  }
`;

export const CarouselTitle = styled.div`
  width: 16rem;
  position: absolute;
  z-index: 99;
  top: 40%;
  left: 45%;
  transform: translate(-50%, -50%);
  color: ${props => props.theme.white};
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: 1px 1px 1px ${props => props.theme["gray-700"]};

  h2 {
    font-size: 1.75rem;
  }

  p span {
    color: ${props => props.theme["green-500"]};
  }

  @media (min-width: 375px) {
    left: 40%;
  }
  
  @media (min-width: 425px) {
    left: 35%;
  }

  @media (min-width: 728px) {
    width: 20rem; 
    left: 25%;

    h2 {
      font-size: 2.5rem;
      line-height: 1.5;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1024px) {
    width: 25rem;
    left: 23%;

    h2 {
      font-size: 3rem;
    }
  }
`;