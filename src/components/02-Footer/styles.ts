import styled, { css } from "styled-components";
import pixelToRem from "../../utils/pxToRem";

export const ContainerSection = styled.section`
  padding: var(--header-height) 0;
  background: var(--header-color);
`;

export const Container = styled.div`
  display: grid;
  gap: 2rem;
  min-width: ${pixelToRem(276)};
`;

export const Zap = styled.div`
  display: grid;
  gap: 2rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  h2 {
    color: var(--text-color-light);
    text-align: center;
    width: 100%;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
}
  p {
    color: var(--text-color-light);
    line-height: 1.75rem;
    text-align: justify;
    max-width: 32rem;
}
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
  font-size: 2.5rem;
  color: var(--text-color-light);
  }

  a { 
    font: var(--text-3);
    color: var(--text-color-light);
  }
`;

export const Socials = styled.div`
  display: grid;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  h3 {
    color: var(--text-color-light);
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

export const Social = styled.div `
  display: flex;
  column-gap: 3rem;
  max-width: 375px;
  margin: 0 auto;

`;

const iconCSS = css`
  font-size: 3rem;
  color: var(--text-color-light);
  flex-shrink: 0;
`;

export const DivLink = styled.a`
  ${iconCSS}

    &:hover {
      color: #0e76a8;
      transition: color .2s;
    }
  
`;

export const DivGit = styled.a`
  ${iconCSS}
  svg {
    &:hover {
      color: #333;
      transition: color .2s;
    }
  }
`;

export const DivInsta = styled.a `
  ${iconCSS}
  svg {
    &:hover {
      color: #E1306C;
      transition: color .2s;
    }
  }
`;

export const DivTv = styled.a `
  ${iconCSS}
  svg {
    &:hover {
      color: #6441A4;
      transition: color .2s;
    }
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
