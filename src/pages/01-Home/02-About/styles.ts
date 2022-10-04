import styled from "styled-components";
import { device } from "../../../utils/responsive";

export const ContainerSection = styled.section`
  min-height: 100vh;
  display: flex;
  background: var(--header-color);
`;

export const ContainerMaster = styled.div`
  padding: 5rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  flex-direction: column;
  width: 100%;
  display: flex;

  h2 {
    font: var(--font-sub-header-1);
    color: #FFF;
    text-align: center;
    width: 100%;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    margin: 0;
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

export const Container = styled.div`
  justify-content: space-evenly;
  flex-direction: column;
  display: flex;
  margin: 0 auto;
  max-width: 570px;
`;

export const Text = styled.div`
  gap: 2rem;
  align-items: center;
  flex-direction: column;
  display: flex;
  margin-bottom: 2.5rem;
  margin-top: 2.5rem;

  p {
  color: #FFF;
  line-height: 1.75rem;
  text-align: justify;
  max-width: 32rem;
}
`;
