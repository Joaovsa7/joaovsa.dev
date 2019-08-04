import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 150px;
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;

`;

export const Anchor = styled.a`
  text-decoration: none;
  outline: none;
  &:visited {
    color: ${({ theme }) => theme.primaryColor};
  }
  svg {
    fill: ${({ theme }) => theme.primaryColor};
    font-size: 24px;
    &:hover {
      fill: ${({ theme }) => theme.blue};
    }
  }
`;
