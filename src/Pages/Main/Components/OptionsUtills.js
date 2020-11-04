import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

const Wrapper = styled.div`
  position: absolute;
  right: 150px;
  box-sizing: border-box;
    background: white;
  padding: 8px;
  width: 170px;
  align-items: center;
  justify-content: space-between;
  height: 35px;
  display: ${props => props.isOpen ? "flex" : "none"};
  @media(max-width: 376px) {
    right: 130px;
  }
`;

const Input = styled.input`
  width: 55px;
  outline: none;
    background: #ececec;
  border: none;
  box-sizing: border-box;
  padding: 5px;
  font-size: 1.2rem;
  color: red;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  }
`;

const Concurrency = styled.span`
  font-size: 1.2rem;
  vertical-align: center;
  color: red;
`;

const Inputs = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

export const Price = () => {
  const isOpen = useSelector(s => s.extraOptions.price);
  return (
    <Wrapper isOpen={isOpen}>
    <Concurrency>₽</Concurrency>
    <Inputs>
      <Input placeholder="min" type="number" />
      <Input placeholder="max" type="number" />
    </Inputs>
    </Wrapper>
  );
};

const SquareWrapper = styled(Wrapper)`
  top: 45px;
`;
export const Square = () => {
  const isOpen = useSelector(s => s.extraOptions.square);
  return (
    <SquareWrapper isOpen={isOpen}>
    <Concurrency>m²</Concurrency>
    <Inputs>
      <Input placeholder="min" type="number" />
      <Input placeholder="max" type="number" />
    </Inputs>
    </SquareWrapper>
  )
}


const BedroomsWrapper = styled(Wrapper)`
  top: 80px;
`;

const Item = styled.div`
  padding: 5px;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid red;
  }
`;

const items = [1, 2, 3, 4, "+5"];

export const Bedrooms = () => {
  const isOpen = useSelector(s => s.extraOptions.bedrooms);
  return (
    <BedroomsWrapper isOpen={isOpen}>
    {
      items.map(i => <Item>{i}</Item>)
    }
    </BedroomsWrapper>
  );
};

const BathroomsWrapper = styled(Wrapper)`
  top: 115px;
`;

export const Bathrooms = () => {
  const isOpen = useSelector(s => s.extraOptions.bathrooms);
  return (
    <BathroomsWrapper isOpen={isOpen}>
      {
        items.map(i => <Item>{i}</Item>)
      }
    </BathroomsWrapper>
  )
}
