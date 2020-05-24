import styled, { css } from "styled-components";

export const ResumeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a > svg#logo {
    width: 115px;
  }

  p {
    color: black;
    overflow: hidden;
    height: 0;
    transition: height 0.3s;
  }

  &.open {
    p {
      overflow: auto;
      height: 300px;
      transition: height 0.3s;
    }
  }
`;

export const JobTitle = styled.h2`
  font-weight: 300;
  font-style: italic;
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const AboutMeContainer = styled.div`
  max-width: 475px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 15px;
  width: 100%;
  overflow: hidden;
  max-height: 0px;
  will-change: max-height;
  transition: max-height 0.3s linear;
  &.show {
    max-height: 114px;
    transition: max-height 0.3s linear;
  }
`;
