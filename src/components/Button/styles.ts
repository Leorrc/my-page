import styled from "styled-components";
import pixelToRem from '../../utils/pxToRem'

import { ButtonProps } from ".";

export const ButtonComponent = styled.button<ButtonProps>`
  background-color: var(--roxo-2);
  color: var(--text-color-light);
  width: ${({ fullWidth }) => (fullWidth ? "100%" : pixelToRem(200))};
  height: ${pixelToRem(56)};
  border: none;
  border-radius: ${pixelToRem(9)};
  transition: background 0.3s;
  display: inline-flex;
  align-items: center;
  padding: 0 1rem;
  
  a {
    color: white;
    font: var(--text-2);
  }

  svg {
  font-size: 1.5rem;
  margin-right: 0.625rem;
  }
  
  &:hover {
    cursor: pointer;
    background: var(--color2);
  }
`;