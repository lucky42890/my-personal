import React from 'react';

import styled from 'styled-components';
import { theme, mixins, A, P } from '../style';

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  background-color: ${theme.colors.darkNavy};
  padding: 25px 150px 20px;
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.slate};
  text-align: center;
  height: 75px;
`;
const Copy = P.extend`
  margin-bottom: 3px;
`;
const GithubLink = A.extend`
  ${mixins.inlineLink};
  color: ${theme.colors.lightGrey};
  font-family: ${theme.fonts.SFMono};
  font-size: ${theme.fontSizes.xsmall};

  &:after {
    display: none;
  }
`;

const Footer = () => (
  <FooterContainer>
    <Copy>Designed &amp; Developed by Brittany Chiang</Copy>
    <GithubLink href="https://github.com/bchiang7/v4" target="_blank" rel="noopener">
      View Source
    </GithubLink>
  </FooterContainer>
);

export default Footer;
