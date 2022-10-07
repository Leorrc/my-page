import styled from "styled-components";
import pixelToRem from "../../../../utils/pxToRem";
import { device } from "../../../../utils/responsive";

export const Card = styled.article`

  background: var(--roxo-2);
  border-radius: 0.5rem;
  overflow: hidden;
  flex-direction: column;
  max-width: 28rem;
  min-height: 17.25rem;
  display: flex;

  @media ${device.laptop} {
    max-width: 70rem;
    flex-direction: row;
    flex: 1 1 10px;
  }
`;

export const DivImg = styled.div`
  overflow: hidden;
  flex: 1 1 0%;
`;

export const Img = styled.picture`

  img {
    max-width: 100%;
    height: auto;
    -o-object-fit: cover;
    object-fit: cover;
    width: 100%;
    height: 100%;

    vertical-align: middle;
}

@media ${device.laptop} {
  img {

  }
  }

`;

export const Infos = styled.div`
  display: flex;
  flex: 1 1 0%;
  gap: 1.5rem;
  flex-direction: column;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  padding-bottom: 1.25rem;
  padding-top: 1.25rem;

  h3 {
    --tw-text-opacity: 1;
    color: rgb(246 149 52/var(--tw-text-opacity));
    line-height: 1;
    font-weight: 700;
    font-size: 27px;
    margin: 0;
  }

  p {
    margin: 0;
    max-width: 32rem;
    font-weight: 500;
    color: var(--text-color-light);
  }

  @media ${device.mobileL} {
    gap: 2rem;
    h3 {
    font-size: 1.875rem;
    line-height: 2.25rem;
    }
  }

  @media ${device.laptop} {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    gap: 0.75rem;
    justify-content: space-around;

    h3 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    }

    p {
    font-size: 1.125rem;
    line-height: 1.75rem;
    }
  }
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.25rem;
`;

export const AButton = styled.a`
  width: ${pixelToRem(150)};
  height: ${pixelToRem(40)};
  border: none;
  border-radius: ${pixelToRem(9)};
  transition: background 0.3s;
  display: flex;
  justify-content: center;
  background: var(--header-color);
  color: var(--text-color-light);
  gap: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font: var(--text-01);
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    display: block;
    color: var(--text-color-light);
  }
  
  &:hover {
    cursor: pointer;
    background: var(--color2);
  }

`;
