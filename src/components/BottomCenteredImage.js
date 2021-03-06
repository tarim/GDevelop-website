import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/media';
import { defaultBoxShadow } from './styles/shadows';

const CenteredImage = styled.img`
  max-width: ${props => props.maxWidth};
  margin-top: 20px;
  margin-bottom: 0;

  ${props => props.shadow && defaultBoxShadow} ${media.tablet`
    max-width: 90%;
  `};
`;

const Container = styled.div`
  margin: 0;
  margin-bottom: -6px;
  text-align: center;
`;

export default props => (
  <Container>
    <CenteredImage {...props} />
  </Container>
);
