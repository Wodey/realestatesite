import React from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {changeSort} from '../../../services/sortReducer/actions';
import {SORT_TYPES} from "../../../services/sortReducer/actionsTypes";

const Wrapper = styled.div`
  display: flex;
  user-select: none;
  justify-content: space-between;
  width: 350px;
  margin-top: 15px;
  @media(max-width: 426px) {
    width: 290px;
  }
  @media(max-width: 320px) {
    width: 270px;
  }
`;
const Item = styled.div`
  font-size: 1rem;
  cursor: pointer;
  color: ${props => props.sort ? "red" : "#7a7a7a" };

`;
export default () => {
  const dispatch = useDispatch();
  const sort = useSelector(s => s.sort.sort);

  return (
    <Wrapper>
      <Item onClick = {() => dispatch(changeSort(SORT_TYPES.MAXPRICE))} sort={sort === SORT_TYPES.MAXPRICE}>Max price</Item>
      <Item onClick = {() => dispatch(changeSort(SORT_TYPES.MINPRICE))} sort={sort === SORT_TYPES.MINPRICE}>Min price</Item>
      <Item onClick = {() => dispatch(changeSort(SORT_TYPES.SQUARE))} sort={sort === SORT_TYPES.SQUARE}>Square</Item>
      <Item onClick = {() => dispatch(changeSort(SORT_TYPES.BEDROOMS))} sort={sort === SORT_TYPES.BEDROOMS}>Bedrooms</Item>
    </Wrapper>
  )
};
