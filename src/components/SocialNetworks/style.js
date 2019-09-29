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
    color: #eee;
  }
  svg {
    fill: #eee;
    font-size: 24px;
    &:hover {
      fill: #488DE8;
    }
  }
`;