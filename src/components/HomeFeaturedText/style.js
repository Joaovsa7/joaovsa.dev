import styled from 'styled-components';

export const FeaturedText = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.primaryColor};
  @media screen and (min-width: 768px) {
    font-size: 4rem;
    width: ${({ stretch }) => (stretch ? stretch : '100%')};
  }
`;

export const Container = styled.main`
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
