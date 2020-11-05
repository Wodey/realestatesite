import React,{useState} from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {setPriceLimit, setSquareLimit, setBedroomsLimit, setBathroomsLimit} from '../../../services/extraOptionsFunctionsReducer/actions';

const Wrapper = styled.div`
  position: absolute;
  right: 150px;
  box-sizing: border-box;
  background: white;
  padding: 8px;
  width: 200px;
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
  width: 65%;
  display: flex;
  justify-content: space-between;
`;

export const Price = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(s => s.extraOptions.price);
  const price = useSelector(s => s.extraOptionsFunc.price);
  const min = price[0];
  const max = price[1];
  const setMin = (e) => {
    dispatch(setPriceLimit([e.target.value, min]));
  };
  const setMax = (e) => {
    dispatch(setPriceLimit([min, e.target.value]));
  };
  return (
    <Wrapper isOpen={isOpen}>
    <Concurrency>₽ Млн</Concurrency>
    <Inputs>
      <Input placeholder="min" type="number" onChange={setMin} value={min} />
      <Input placeholder="max" type="number" onChange={setMax} value={max} />
    </Inputs>
    </Wrapper>
  );
};

const SquareWrapper = styled(Wrapper)`
  top: 45px;
`;
export const Square = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(s => s.extraOptions.square);
  const square = useSelector(s => s.extraOptionsFunc.square);
  const min = square[0];
  const max = square[1];
  const setMin = (e) => {
    dispatch(setSquareLimit([e.target.value, max]));
  };
  const setMax = (e) => {
    dispatch(setSquareLimit([min, e.target.value]));
  };
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
  color: ${props => props.isActive ? "red" : "black"};
`;

const items = [1, 2, 3, 4, "+5"];

export const Bedrooms = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(s => s.extraOptions.bedrooms);
  const bedrooms = useSelector(s => s.extraOptionsFunc.bedrooms);
  return (
    <BedroomsWrapper isOpen={isOpen}>
    {
      items.map(i => <Item isActive={bedrooms === i} onClick={() => dispatch(setBedroomsLimit(i))}>{i}</Item>)
    }
    </BedroomsWrapper>
  );
};

const BathroomsWrapper = styled(Wrapper)`
  top: 115px;
`;

export const Bathrooms = () => {
  const isOpen = useSelector(s => s.extraOptions.bathrooms);
  const bathrooms = useSelector(s => s.extraOptionsFunc.bathrooms);
  const dispatch = useDispatch();
  return (
    <BathroomsWrapper isOpen={isOpen}>
      {
        items.map(i => <Item isActive={bathrooms === i} onClick={() => dispatch(setBathroomsLimit(i))}>{i}</Item>)
      }
    </BathroomsWrapper>
  )
}
