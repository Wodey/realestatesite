import React from 'react';
import styled from 'styled-components';
import data from "../../newFile.json";

const item = data["homes"][0];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
  overflow: hidden;
`;

const Image = styled.img`
  height: auto;
  width: 100%;
`;
const Images = styled.div`
  width: 100%;
  display: flex;

`;
const Phone = styled.span`
  font-weight: bold;
`;
const PhoneWrapper = styled.div`
  font-size: 1.3rem;
  color: #fff;
  background: red;
  padding: 15px;
  width: 45%;
  text-align: center;
  margin: 30px 0;
  cursor: pointer;

`;
const Address = styled.span`
  color: red;
  padding: 5px 0;
  font-size: 1.2rem;
`;

const Content = styled.div`
  font-size: 1.1rem;
  color: #a2a2a2;
`;
const ItemTitle = styled.span`
  font-size: 1.3rem;
`;
const ItemValue = styled.span`
  font-size: 1.3rem;
  color: red;
  text-align: end;
`;
const Title = styled.span`
  font-size: 1.3rem;
  padding-top: 15px;
`;

const ItemsBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 40%;
  padding: 15px 0;
`;


export default function HomeItem () {
  console.log(item)
  return (
    <Wrapper>
      <Images>
        {item.images.map(i => <Image src={i} />)}
      </Images>
      <Title>{item.title}</Title>
      <Address>{item.address}</Address>
      <Content>{item.content}</Content>
      <ItemsBlock>
        <ItemTitle>Bedrooms</ItemTitle>
        <ItemValue>{item.bedrooms}</ItemValue>
        <ItemTitle>Bathrooms</ItemTitle>
        <ItemValue>{item.bathrooms}</ItemValue>
        <ItemTitle>Square</ItemTitle>
        <ItemValue>{item.square}m²</ItemValue>
        <ItemTitle>Price</ItemTitle>
        <ItemValue>₽{item.price.replace(/(\d)(?=(\d{3})+$)/g, '$1 ')}</ItemValue>
      </ItemsBlock>
      <PhoneWrapper>
        Wanna {item.type}? Call <Phone>{item.phone}</Phone>
      </PhoneWrapper>
    </Wrapper>
  );
};
