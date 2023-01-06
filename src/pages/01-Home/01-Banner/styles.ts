import styled from "styled-components";
import { device } from "../../../utils/responsive";

export const ContainerSection = styled.section`
  display: flex;
  padding: calc(8rem + var(--header-height)) 0;
  min-height: 100vh;
  background: linear-gradient(to right, #8e2de2, #4a00e0); 
  margin: 0 auto;
`;

export const Container = styled.div`
  display: grid;
  margin: 0 auto;
  padding: 0 9px;
  max-width: 1280px;
`;

export const Img = styled.img`
  margin: auto;
  width: 20rem;
  filter: drop-shadow(0 0 1em rgb(36, 15, 70));
  animation: pulse-purple 2s infinite;

  @keyframes pulse-purple {
    0% {
    transform: scale(0.95);
  }
    70% {
    transform: scale(1);
    }
    100% {
    transform: scale(0.95);
    }
  }

  @media (min-width: 480px) {
    width: 30rem;
}

`;

export const Text = styled.div`
  margin: 0 auto;

span {
  margin-bottom: 0.25rem;
  color: var(--text-color-light);
  font: var(--text-3);
}

h1 {
  margin-bottom: 0.25rem;
  font: var(--font-header-1);
  color: var(--amarelo);
}

strong {
  margin-bottom: 0.25rem;
  font: var(--text-4);
  text-transform: uppercase;
  color: var(--text-color-light);
}

@media ${device.mobileL} {
    h1 {
    font: var(--font-header-2);
  }
    strong {
      font: var(--font-heading-2);
      letter-spacing: 0.25rem;
    }
};
  
    @media ${device.tablet} {

      h1 {
      font: var(--font-header-3);
      }

      strong {
      letter-spacing: 0.25rem;
    }
    }
`;

export const Line = styled.div`
  width: 100%;
  max-width: 10rem;
  height: 0.25rem;
  border-radius: 1rem;
  background-color: #fff;
  margin: 1rem auto;
`;
