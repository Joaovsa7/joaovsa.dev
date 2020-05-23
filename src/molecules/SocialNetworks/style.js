import styled from "styled-components";

export const Wrapper = styled.div`
  a {
    &:nth-child(2) {
      margin: 0px 20px;
    }
  }
`;

export const Anchor = styled.a`
  text-decoration: none;
  outline: none;
  &:visited {
    color: #eee;
  }
  svg {
    fill: rgba(0, 0, 0, 0.7);
    font-size: 24px;
    &:hover {
      fill: #000;
    }
  }

  &:nth-child(2) {
    svg {
      &:hover {
        fill: #488de8;
      }
    }
  }

  &:nth-child(3) {
    svg {
      &:hover {
        fill: #0e76a8;
      }
    }
  }
`;
