import styled from "styled-components";

export const Divider = styled.div`
  display: grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
  row-gap: 1.5rem;
  gap: 0.75rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  width: 100%;

  max-width: 768px;

  strong {
    color: #FFF;
    text-align: center;
  }
`;

export const Iedit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 1rem;

  img {
    width: 4rem;
    height: 4rem;
  }
  
`;

