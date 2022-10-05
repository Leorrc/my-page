import styled from "styled-components";
import { device } from "../../../utils/responsive";

export const ContainerSection = styled.section`
  display: flex;
  min-height: 100vh; 
  background: var(--header-color);
  padding: var(--header-height) 0;

  @media (min-width: 992px) {
    padding: calc(5rem + var(--header-height)) 0;
  }
`;

export const ContainerMaster = styled.div`
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  flex-direction: column;
  width: 100%;
  display: flex;
  gap: 2.5rem;

  h2 {
    color: #FFF;
    text-align: center;
    width: 100%;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
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

p {
  color: var(--text-color-light);
  line-height: 1.75rem;
  text-align: justify;
  max-width: 32rem;
}

`;

export const Cards = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
  margin-top: 3rem;

  @media (min-width: 992px){
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const LinkGit = styled.div`

a {
  font: var(--text-3);
  color: var(--amarelo);
}

`;
