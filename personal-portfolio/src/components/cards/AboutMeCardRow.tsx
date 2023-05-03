import React from 'react';
import styled from 'styled-components';
import { themes } from '../../styles/ColorStyles';
import { MediumText } from '../../styles/TextStyles';

interface AboutMeCardRowProps {
  title: string;
  value: string | number;
  isLink?: boolean;
}

const AboutMeCardRow = (props: AboutMeCardRowProps) => {
  const formatDate = (value: string | number): string => {
    if (typeof value === 'number') {
      const date = new Date(value);
      return date.toLocaleDateString();
    } else {
      return value;
    }
  };
  if (props.isLink) {
    return (
      <InfoDetailBox>
        <InfoKey>{props.title}</InfoKey>
        <InfoValueWrapper>
          <StyledNavLink href={formatDate(props.value)}>
            <LinkText>{formatDate(props.value)}</LinkText>
          </StyledNavLink>
        </InfoValueWrapper>
      </InfoDetailBox>
    );
  }
  return (
    <InfoDetailBox>
      <InfoKey>{props.title}</InfoKey>
      <InfoValueWrapper>
        <InfoValue>{formatDate(props.value)}</InfoValue>
      </InfoValueWrapper>
    </InfoDetailBox>
  );
};

const InfoDetailBox = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;
  column-gap: 6px;
`;

const InfoValueWrapper = styled.div``;

const InfoKey = styled(MediumText)`
  font-weight: bold;
  color: ${themes.light.text1};

  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text1};
  }
`;

const InfoValue = styled(MediumText)`
  color: ${themes.light.text1};
  margin-bottom: 8px;

  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text1};
  }
`;
const LinkValue = styled.a``;
const LinkText = styled(MediumText)``;

const StyledNavLink = styled(LinkValue)`
  color: ${themes.light.primary};
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${themes.dark.secondary};
  }
  &:active {
    color: red;
  }
`;

export default AboutMeCardRow;
