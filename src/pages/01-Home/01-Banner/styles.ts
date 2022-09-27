import styled from "styled-components";

export const ContainerSection = styled.section`
  padding: calc(10rem + var(--header-height)) 0;
  min-height: 100vh;
  display: flex;
  background: linear-gradient(to right, #8e2de2, #4a00e0) ; 
  text-align: center ;

  @media (min-width: 992px) {
    padding: calc(5rem + var(--header-height)) 0;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center ;
  flex-direction: column ;

  width: 100%;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  margin-right: auto;
  margin-left: auto;

  img { 
    width: 20rem;
    filter: drop-shadow(0 0 1em rgb(36, 15, 70));
    animation: pulse-purple 2s infinite;

    @keyframes pulse-purple {
	0% {
		transform: scale(0.95);

	}
	
	70% {
		transform: scale(1);
		
	}
	
	100% {
		transform: scale(0.95);
		
	}
}
  }

  span {
    text-align: left;
    color: #FFF;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
  }

  h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    text-transform: uppercase !important;
    margin-bottom: 0 !important;
    color: #FFF;
  }
  
  p {
    margin-top: 2rem;
    font-size: 1.25rem;
    text-transform: uppercase !important;
    margin-bottom: 0 !important;
    color: #FFF;
  }
`;

export const Line = styled.div`
    width: 100%;
    max-width: 7rem;
    height: 0.25rem;
    background-color: #2c3e50;
    border-radius: 1rem;
    border-color: #2c3e50;
    background-color: #fff;
`;
