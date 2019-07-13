import React from 'react';
import { Container, FeaturedText } from './style';

const FeaturedTeaser = ({ headText, text }) => (
  <Container>
    <FeaturedText>{headText}</FeaturedText>
    {text && <p>{text}</p>}
  </Container>
);

export default FeaturedTeaser;
