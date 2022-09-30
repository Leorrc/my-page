import styled from "styled-components";

export const ContainerSection = styled.section`
  min-height: 100vh;
  display: flex;
  background: var(--header-color);
`;

export const Container = styled.div`
  padding: 5rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  flex-direction: column;
  width: 100%;
  display: flex;

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
`;

