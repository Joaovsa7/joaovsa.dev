import styled from 'styled-components';

export const PageWrapper = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${({ theme }) => theme.primaryColor};
  h1 {
    font-size: 2.5rem;
    color: #eee;
    @media screen and (min-width: 768px) {
      font-size: 4rem;
    }
    text-align: center;
  }

  h2 {
    font-size: 2rem;
    @media screen and (min-width: 768px) {
      font-size: 3rem;
    }
  }
  @media only screen and (min-width: 768px){
    height: 85%;
  }
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.primaryColor};
  font-size: ${({ size }) => size};
  text-align: ${({ alignStyle }) => alignStyle ? alignStyle : 'center'};
`;
