import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  flex: 0 1 auto;
  height: 510px;
  box-sizing: border-box;
  padding: 15px;
  cursor: pointer;
  border: 1px solid white;
  justify-content: space-between;

  @media(max-width: 376px) {
      width: 100%;
  }
  &:hover {
    border: 1px solid black;
  }

`;

const OutlineWrapper = styled.div`
    width: 42%;
    a {
      text-decoration: none;
      color: black;
    }
`;


const Title = styled.span`
  font-size: 1.3rem;
  color: red;
`;
const Image = styled.img`
  width: 100%;
  height: 40%;
`;
const Price = styled.span`
  font-size: 1.3rem;
`;
const IconsList = styled.div`
`;
const Icon = styled.img`
  width: 1.6em;
`;
const IconText = styled.span`
  font-size: 1.2rem;
  padding: 7px;
  vertical-align: top;
`;
const TextBody = styled.div`
  font-size: 1.1rem;
`;


export default function Item({i}) {
  return (
    <OutlineWrapper>
      <Wrapper>
          <Image src={i.mainimg}/>
          <Title>{i.address}</Title>
          <IconsList>
            <Icon src="/square.svg"></Icon>
            <IconText>{i.square}m²</IconText>
            <Icon src="/bathroom.svg"></Icon>
            <IconText>{i.bathrooms}</IconText>
            <Icon src="/bedroom.svg"></Icon>
            <IconText>{i.bedrooms}</IconText>
          </IconsList>
          <TextBody>{i.content.slice(0,100) + "..."}</TextBody>
          <Price>₽{i.price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')}</Price>
      </Wrapper>
    </OutlineWrapper>
  );
};
