import styled from "styled-components";

export const ContainerSection = styled.section`
  padding: var(--header-height) 0;
  background: var(--header-color);
`;

export const Container = styled.div`
  display: grid;
  gap: 2rem;
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

svg {
  font-size: 3rem;
  margin-right: 0.625rem;
  color: var(--text-color-light);
  }
`;

export const Social = styled.div `
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
`;

export const DivLink = styled.div `
  svg {
    &:hover {
      color: #0e76a8;
      transition: color .2s;
    }
  }
`;

export const DivGit = styled.div `
  svg {
    &:hover {
      color: #333;
      transition: color .2s;
    }
  }
`;

export const DivInsta = styled.div `
  svg {
    &:hover {
      color: #E1306C;
      transition: color .2s;
    }
  }
`;

export const DivTv = styled.div `
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
