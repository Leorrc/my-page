import styled from "styled-components";

export const ContainerSection = styled.section`
  padding: 6rem 0;
  background: var(--body-color); 
  text-align: center !important;

  @media (min-width: 992px) {
    padding: 6rem 0;
  }
`;

export const Container = styled.div`
  gap: 2rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  text-align: center;

  h2 {
    font-size: 2.25rem;
    line-height: 2rem;
    text-transform: uppercase !important;
    margin-bottom: 0 !important;
    color: var(--header-color);
  }
`;

export const Divider = styled.div`
  margin: 1.25rem 0 1.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  i {
    color: var(--roxo-2);
    font-size: 3rem;
  }
`;

export const Line = styled.div`
  width: 100%;
  max-width: 7rem;
  height: 0.25rem;
  background-color: #2c3e50;
  border-radius: 1rem;
  border-color: #2c3e50;
  background-color: var(--header-color);
`;

export const DivRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 2rem;
`;

export const Card = styled.div`
  padding: 3.625rem ;
  box-shadow: 0px 0px 12px rgb(0 0 0 / 8%);
  border-bottom: 0.25rem solid var(--roxo-3);
  border-radius: 0.25rem 0.25rem 0 0;

`;