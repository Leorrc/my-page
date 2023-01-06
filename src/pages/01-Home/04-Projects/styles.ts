import styled from "styled-components";
import { device } from "../../../utils/responsive";

export const ContainerSection = styled.section`
  min-height: 100vh; 
  background: var(--roxo-1);
  /* padding: var(--header-height) 0;

  @media (min-width: 992px) {
    padding: calc(5rem + var(--header-height)) 0;
  } */
`;

export const ContainerMaster = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  padding-left: 1rem;
  padding-right: 1rem;

    @media (min-width: 480px) {
        padding-left: 2rem;
        padding-right: 2rem;
      }
    @media (min-width: 640px) {
        padding-left: 4rem;
        padding-right: 4rem;
    }
    @media (min-width: 768px){
      padding-left: 5rem;
      padding-right: 5rem;
  }

`;

export const DivText = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  gap: 2rem;

  h2 {
  color: var(--text-color-light);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  font-family: var(--font-test);
}

  p {
  color: var(--text-color-light);
  line-height: 1.75rem;
  text-align: justify;
  max-width: 48rem;
  margin: 0;
;
}

  @media ${device.mobileL} {
  h2 {
    font: var(--font-sub-header-2);
  }
  }

  @media ${device.tablet} {

    h2 {
      font: var(--font-sub-header-3);
  }
  }
`;

export const Cards = styled.div`
  gap: 3rem;
  align-items: center;
  flex-direction: column;
  display: flex;

  @media ${device.tablet} {
    gap: 4rem;

  }
`;

export const LinkGit = styled.div`
  color: var(--text-color-light);
  align-items: center;
  margin-top: 4rem;
  text-align: center;
  margin-top: 4rem;
  
  font: var(--text-1);

a {
  font: var(--text-3);
  color: var(--amarelo);
}

svg {
  color: var(--text-color-light);
  width: 1.5rem;
  height: 1.5rem;
  }

`;
