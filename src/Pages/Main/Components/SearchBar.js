import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import styled from 'styled-components';
import {changeRentOrBuy} from "../../../services/buyorrent/actions";
import {FILTERS} from  "../../../services/buyorrent/actionsTypes";
import {typeText} from "../../../services/typeplace/actions";
import {openExtraOptions, closeExtraOptions} from "../../../services/extraOptionsReducer/actions";

const OutlineWrapper = styled.div`
  display: flex;
  margin-top: 100px;
  user-select: none;
  flex-direction: column;
  width: 350px;

  @media(max-width: 426px) {
    width: 290px;
  }
  @media(max-width:320px) {
    width: 270px;
  }
`;

const Switchers = styled.div`
  display: flex;
  margin-top: 10px;
`;
const Switch = styled.button`
  font-size: 1.1rem;
  border: none;
  outline: none;
  background: transparent;
  color: ${props => props.activated ? "red" : "black"};
  cursor: pointer;
  margin-right: 5px;
`;

const Wrapper = styled.div`
  display: flex;
`;
const Input = styled.input`
  padding: 3px;
  outline: none;
  font-size: 1.4rem;
  border: none;
  border-bottom: 1px solid black;
  margin-right: 5px;
  width: 80%;
`;
const Button = styled.button`
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  background: transparent;
font-family: 'Roboto', sans-serif;
  color: black;
  outline: none;
  &:hover {
    background: black;
    color: white;
  }
`;

const Extra = styled(Switch)`
  margin-left: auto;
`;

export default () => {
  const [value, setValue] = useState('');
  const currentFilter = useSelector(s => s.buyrent.filter);
  const isOpenExtraOptions = useSelector(s => s.extraOptions.isOpen);
  const dispatch = useDispatch();
  const searchPlace = () => {
    dispatch(typeText(value));
  };
  const searchPlaceEnter = (e) => {
    if(e.key == "Enter") {
      dispatch(typeText(value));
    }
  }
  return (
    <OutlineWrapper>
    <Wrapper>
      <Input value={value} onChange={e => setValue(e.target.value)} onKeyPress={searchPlaceEnter}/>
      <Button onClick={searchPlace} >Search</Button>
    </Wrapper>
    <Switchers>
      <Switch activated={currentFilter === FILTERS.BUY} onClick={() => dispatch(changeRentOrBuy(FILTERS.BUY))}>Buy</Switch>
      <Switch activated={currentFilter === FILTERS.RENT} onClick={() => dispatch(changeRentOrBuy(FILTERS.RENT))}>Rent</Switch>
      <Extra activated={isOpenExtraOptions} onClick={(e) => {
        e.stopPropagation();
        if(isOpenExtraOptions) {
          dispatch(closeExtraOptions())
        } else {
          dispatch(openExtraOptions());
        }
      }
      }>More options</Extra>
    </Switchers>
    </OutlineWrapper>
  );
};
