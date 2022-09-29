import styled from "styled-components";

export const ContainerSection = styled.section`
  display: flex;
  padding: calc(8rem + var(--header-height)) 0;
  min-height: 100vh;
  background: linear-gradient(to right, #8e2de2, #4a00e0); 

  @media (min-width: 992px) {
    padding: calc(5rem + var(--header-height)) 0;
  }
`;

export const Container = styled.div`
  display: grid;
  margin: 0 auto;
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
`;

export const Text = styled.div`

span {
  color: #FFF;
  font: var(--text-3);
}

h1 {
  font: var(--font-heading-1);
  color: var(--amarelo);
}

strong {
  font: var(--text-4);
  text-transform: uppercase;
  color: #FFF;
}
`;

export const Line = styled.div`

  width: 100%;
  max-width: 10rem;
  height: 0.25rem;
  border-radius: 1rem;
  background-color: #fff;
  margin: 2rem auto;
`;
