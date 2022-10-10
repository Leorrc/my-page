import styled, { css } from "styled-components";
import pixelToRem from "../../utils/pxToRem";
import { device } from "../../utils/responsive";

export const ContainerL = styled.div`
  display: flex;
  min-height: 32rem;
  flex-direction: column;
  padding: var(--header-height) 0;
`;

export const ContainerM = styled.div`
  display: flex;
  flex: 1 1 0%;
`;

export const DivContent = styled.section`
  display: flex;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  gap: 2rem;
  padding-right: 1rem;
  padding-left: 1rem;
  align-items: center;

  h2,h3{
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  position: relative;

  :after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 0.25rem;
    border-radius: 1rem;
    background: var(--roxo-2);
    bottom: 0;
    left: 0;
  }
}

  @media ${device.mobileL} {
    padding-right: 2rem;
    padding-left: 2rem;

    h2,h3 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    }
  }
  @media ${device.tablet} {
    padding-right: 4rem;
    padding-left: 4rem;

    h2,h3{
    font-size: 3rem;
    line-height: 1;
    }
  }
  @media ${device.laptopS} {
    padding-right: 5rem;
    padding-left: 5rem;
  }

`;

export const DivText = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;

  p {
  color: var(--text-color-light);
  font-weight: 500;
  text-align: justify;
  max-width: 32rem;
  
  }
 
  @media ${device.mobileL} {
    align-items: center;
  }
  @media ${device.laptop} {
    justify-content: space-around;
    gap: 0;

    p {
      text-align: center;
      padding-bottom: 2rem;
    }
  }
`;

export const IconsLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  width: -moz-fit-content;
  width: -webkit-fit-content;
  gap: ${pixelToRem(20)};


  @media ${device.mobileL} {
    gap: 2rem;
  }
  @media ${device.tablet} {
    gap: 2.5rem;
  }
  @media ${device.laptopS} {
    justify-content: space-around;
    flex-direction: row;
    width: 100%;
  }
`;

export const DivTextLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  strong {
    font-weight: bolder;
  }

  a {
    color: var(--text-light-color);
    text-decoration: underline;

    :hover {
      color: var(--roxo-2);
      transition: color .2s;
    }
  }
`;

const iconCSS = css`
  display: flex;
  font-size: 1.125rem;
  line-height: 1.75rem;
  gap: 0.5rem;
  align-items: center;
`;

export const LinkLinkedin = styled.div`
  ${iconCSS}
  svg {
    width: 3.5rem;
    height: 3.5rem;
    color: #0e76a8;
  }

`;
export const LinkGit = styled.div`
  ${iconCSS}
  svg {
    width: 3.5rem;
    height: 3.5rem;
    color: #00ff95;
  }

`;
export const LinkInsta = styled.div`
  ${iconCSS}
  svg {
    width: 3.5rem;
    height: 3.5rem;
    color: #E1306C;
  }

`;
export const LinkTwitch = styled.div`
  ${iconCSS}
  svg {
    width: 3.5rem;
    height: 3.5rem;
    color: #6441A4;
  }

`;

export const IFooter = styled.div `
  width: 100%;
  padding: 1.25rem;
  bottom: 0;
  text-align: center;
  background: var(--roxo-1);

  span {
    font: var(--text-1);
    color: #FFF;
  }

  strong {
    font: var(--text-1);
    color: var(--amarelo);
  }
`;
