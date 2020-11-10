import React,{useEffect} from 'react';
import Item from './Item';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {getItems} from '../../../services/itemsreducer/actions';

const Wrapper = styled.div`
  display: flex;
  margin-top: 40px;
  flex-wrap: wrap;
  width: 50%;
  justify-content: space-between;
  @media(max-width: 1024px) {
      width: 80%;
  }

  @media(max-width: 376px) {
      flex-direction: column;
      width: 100%;
  }
`;

export default function ItemList () {
  const sort = useSelector(s => s.sort.sort);
  const homes = useSelector(s => s.homes.homes);
  const dispatch = useDispatch();
  const type = useSelector(s => s.buyrent.filter);
  const typeword = useSelector(s => s.type.type);
  const priceLimit = useSelector(s => s.extraOptionsFunc.price);
  const squareLimit = useSelector(s => s.extraOptionsFunc.square);
  const bedrooms = useSelector(s => s.extraOptionsFunc.bedrooms);
  const bathrooms = useSelector(s => s.extraOptionsFunc.bathrooms);

  useEffect(() => {
    dispatch(getItems(type, typeword, sort, priceLimit, squareLimit, bedrooms, bathrooms));
  }, [homes, type, typeword, sort, priceLimit, dispatch, squareLimit, bedrooms, bathrooms])
  return (
    <Wrapper>
      {
        homes.map((i) => {
          return <Item i={i}/>
        })
      }
    </Wrapper>
  );
};
