import styled from 'styled-components';

export const FeaturedText = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primaryColor};
  @media screen and (min-width: 768px) {
    font-size: 4rem;
    width: ${({ stretch }) => (stretch ? stretch : '100%')};
  }
  text-align: center;
`;

export const Container = styled.main`
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    color: ${({ theme }) => theme.primaryColor};
    text-align: left;
  }
`;
