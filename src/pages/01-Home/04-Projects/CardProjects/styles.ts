import styled from "styled-components";
import pixelToRem from "../../../../utils/pxToRem";

export const CardDefault = styled.div`
  max-width: 28rem;
  max-height: 28rem;
  min-width: ${pixelToRem(276)};
  box-shadow: 0px 0px 12px rgb(0 0 0 / 8%);
  border-bottom: 0.25rem solid var(--att-color);
  border-radius: 0.45rem 0.45rem 0.45rem 0.45rem;
  background: var(--roxo-2);
`;

export const Img = styled.img`
  background-size: cover;
  max-width: 100%;
  height: auto;
  display: block;
`;

export const MemberInfos = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font: var(--title-font);

  h3 {
  font: var(--font-sub-header-1);
  text-align: center;
  color: var(--amarelo);
}
  p {
  margin: 0.625rem 0 0 0;
  font-size: 0.938rem;
  font-weight: 500;
  padding-bottom: rem;
} 
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const Button = styled.div`
  width: ${pixelToRem(150)};
  height: ${pixelToRem(40)};
  border: none;
  border-radius: ${pixelToRem(9)};
  transition: background 0.3s;
  display: flex;
  justify-content: center;
  background: var(--header-color);
  

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