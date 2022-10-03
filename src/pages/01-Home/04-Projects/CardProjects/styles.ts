import styled from "styled-components";
import pixelToRem from "../../../../utils/pxToRem";

export const CardDefault = styled.div`
  max-width: 28rem;
  box-shadow: 0px 0px 12px rgb(0 0 0 / 8%);
  border-bottom: 0.25rem solid var(--att-color);
  border-radius: 0.45rem 0.45rem 0.45rem 0.45rem;
  background: var(--roxo-2);
  margin: auto;
  max-width: 28rem;

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

export const Img = styled.div`
  background-size: cover;
  max-width: 100%;
  height: auto;
  display: block;
`;

export const MemberInfos = styled.div`
  padding: 1rem;
  font: var(--title-font);

  h4 {
  font-weight: 700;
  margin-bottom: 0.313rem;
  font-size: 1.25rem;
  color: var(--amarelo);
}
  p {
  margin: 0.625rem 0 0 0;
  font-size: 0.938rem;
  font-weight: 500;
} 
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

export const Button = styled.div`
  border: none;
  border-radius: ${pixelToRem(9)};
  transition: background 0.3s;
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: var(--header-color);
  gap: 0.5rem;

  a {
    display: flex;
    align-items: center;
    color: white;
    gap: 0.25rem;
    font: var(--text-01);
  }

  svg {
    font-size: 1.5rem;
    color: var(--text-color-light);
  }
  
  &:hover {
    cursor: pointer;
    background: var(--color2);
  }
`;

