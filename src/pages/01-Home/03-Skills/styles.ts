import styled from "styled-components";
import { device } from "../../../utils/responsive";

export const ContainerSection = styled.section`
  min-height: 100vh;
  background: var(--header-color);
  padding: 5rem 1.25rem;

  @media ${device.tablet} {
    padding: 5rem;
    margin: 0 auto;

  }
`;

export const Container = styled.div`
  gap: 2rem;
  align-items: center;
  flex-direction: column;
  display: flex;

  p {
    color: #FFF;
    line-height: 1.75rem;
    text-align: justify;
    max-width: 768px;
}

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
`;

