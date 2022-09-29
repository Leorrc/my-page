import styled from "styled-components";

export const CardDefault = styled.div`
  max-width: 15rem;
  box-shadow: 0px 0px 12px rgb(0 0 0 / 8%);
  border-bottom: 0.25rem solid var(--att-color);
  border-radius: 0.45rem 0.45rem 0.45rem 0.45rem;
  background: var(--roxo-2);
  margin: auto;

  h3 {
    text-align: center;
    color: #FFF;
    
  }
  h4 {
    margin-top: .5rem;
    text-align: center;
    color: #FFF;
  }

`;

export const Img = styled.img`
  background-size: cover;
  max-width: 100%;
  height: auto;
  display: block;
`;

export const Name = styled.div`
  padding: 1.25rem;
`;

