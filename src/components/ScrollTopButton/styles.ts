import styled from "styled-components";

export const Container = styled.div`
  .top-to-btm{
  position: relative;
  transition: 0.3s;
}
.icon-position{
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 20;
}

.icon-style{
  background-color: var(--roxo-1);
  border: 2px solid var(--roxo-1);
  border-radius: 50%;
  height: 50px;
  width: 50px;
  color: var(--roxo-2);
  cursor: pointer;
  transition: all .5s ease-in-out;
}

.icon-style:hover{
  animation: none;
  background: var(--roxo-3);
  color: var(--roxo-1);
  border: 2px solid var(--roxo-2);
}

`;

