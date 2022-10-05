import styled from "styled-components";
import { device } from "../../../../utils/responsive";

export const Divider = styled.div`
  display: grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
  row-gap: 1.5rem;
  gap: 0.75rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  width: 100%;

  max-width: 1220px;

  strong {
    color: #FFF;
    text-align: center;
  }

  @media ${device.mobileL}{
    grid-template-columns: repeat(4,minmax(0,1fr));
  }
  @media ${device.tablet}{
    grid-template-columns: repeat(6,minmax(0,1fr));
  }
  @media ${device.laptop}{
    gap: 1rem;
    grid-template-columns: repeat(8,minmax(0,1fr));
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

