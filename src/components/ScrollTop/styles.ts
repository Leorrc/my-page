import styled from "styled-components";


export const Container = styled.div`
  background: var(--base-color);
  color: var(--text-color-light);

  position: fixed;
  right: 1rem;
  bottom: 1rem;

  padding: .5rem;
  clip-path: circle();

  font-size: 1.5rem;
  line-height: 0;

  visibility: hidden;
  opacity: 0;

  transition: 0.3s;
  transform: translateY(100%)


`;