import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 50%;
  display: flex;
`;
const Title = styled.span`
  color: red;
  font-size: 1.2rem;
`;
const Image = styled.img`
  width: 400px;
  height: auto;
`;
const Price = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 5px;
`;
const IconsList = styled.div`
  margin-top: 5px;
`;
const Icon = styled.img`
  width: 2em;
`;
const IconText = styled.span`
  font-size: 1.3rem;
  vertical-align: center;
  padding: 5px;
  vertical-align: top;
`;
const TextBody = styled.div`
  font-size: 1rem;

  color: black;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 15px;
`;

export default ({i}) => {
  return (
    <Wrapper>
      <Column>
        <Image src={i.img}/>
      </Column>
      <Column>
        <Title>{i.title}</Title>
        <Price>₽{i.price}</Price>
        <IconsList>
          <Icon src="/square.svg"></Icon>
          <IconText>{i.square}м2</IconText>
          <Icon src="/bathroom.svg"></Icon>
          <IconText>{i.bathrooms}</IconText>
          <Icon src="/bedroom.svg"></Icon>
          <IconText>{i.bedrooms}</IconText>
        </IconsList>
        <TextBody>{i.content}</TextBody>
      </Column>
    </Wrapper>
  );
};
