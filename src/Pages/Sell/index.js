import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  height: calc(750px - 140px);
  align-items: center;
`;

const Table = styled.div`
  width: 40%;
  display: grid;
  padding: 10px 0;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px 50px;
  margin-bottom: 15px;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
`;
const ItemTitle = styled.label`
  font-size: 1.2rem;
  cursor: pointer;
`;

const Title = styled.span`
  font-size: 2rem;
  padding: 10px;

`;
const Input = styled.input`
  padding: 5px;
  font-size: 1.2rem;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
`;

const Files = styled(Input)`
  border: none;
  padding: 5px 0px;
`;

const Extra = styled.span`
  font-size: 1.1rem;
`;
const Button = styled.button`
  font-size: 1.3rem;
  border: none;
  outline: none;
  cursor: pointer;
  background: black;
  position: absolute;
  bottom: 100px;
  color: white;
  width: 100px;
  height: 50px;
  &:hover {
    color: black;
    background: white;
    border: 1px solid black;
  }
`;
export default () => {
  return (
    <Wrapper>
      <Title>Sell own Real Estate</Title>
      <Table>
        <Item>
          <ItemTitle>Title</ItemTitle>
          <Input />
        </Item>
        <Item>
          <ItemTitle>Address</ItemTitle>
          <Input />
        </Item>
        <Item>
          <ItemTitle>Description</ItemTitle>
          <Input />
        </Item>
        <Item>
          <ItemTitle>Bathrooms</ItemTitle>
          <Input />
        </Item>
        <Item>
          <ItemTitle>Bedrooms</ItemTitle>
          <Input />
        </Item>
        <Item>
          <ItemTitle>Square</ItemTitle>
          <Input />
        </Item>
        <Item>
          <ItemTitle>Price</ItemTitle>
          <Input />
        </Item>
        <Item>
          <ItemTitle>Your Number</ItemTitle>
          <Input />
        </Item>
        <Item>
          <ItemTitle>Tags</ItemTitle>
          <Input />
        </Item>
        <Item>
          <ItemTitle>Type</ItemTitle>
          <Input />
        </Item>
      </Table>
      <Item>
        <ItemTitle>Add photos</ItemTitle>
        <Files type="file" />
        <Extra>(first photo will be used as thumbnail)</Extra>
      </Item>
      <Button>Add</Button>
    </Wrapper>
  )
}
