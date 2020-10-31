import React,{useEffect, useState} from 'react';
import Item from './Item';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {getItems} from '../../../services/itemsreducer/actions';

const items = [{
  title: "Вилла, LA MUETTE, AUTEUIL, PORTE DAUPHINE, PARIS",
  price: 26084400,
  img: "/photos/0/main.jpg",
  square: 180,
  bathrooms: 3,
  bedrooms: 4,
  content: "В самом центре престижной частной виллы, вымощенной и засаженной деревьями, со сторожем в резиденции, состоящей из старых домов с садами, очаровательного дома, особняка на 3..."
}, {
  title: "Вилла, LA MUETTE, AUTEUIL, PORTE DAUPHINE, PARIS",
  price: 26084400,
  img: "/photos/0/main.jpg",
  square: 180,
  bathrooms: 3,
  bedrooms: 4,
  content: "В самом центре престижной частной виллы, вымощенной и засаженной деревьями, со сторожем в резиденции, состоящей из старых домов с садами, очаровательного дома, особняка на 3..."
}, {
  title: "Вилла, LA MUETTE, AUTEUIL, PORTE DAUPHINE, PARIS",
  price: 26084400,
  img: "/photos/0/main.jpg",
  square: 180,
  bathrooms: 3,
  bedrooms: 4,
  content: "В самом центре престижной частной виллы, вымощенной и засаженной деревьями, со сторожем в резиденции, состоящей из старых домов с садами, очаровательного дома, особняка на 3..."
}, {
  title: "Вилла, LA MUETTE, AUTEUIL, PORTE DAUPHINE, PARIS",
  price: 26084400,
  img: "/photos/0/main.jpg",
  square: 180,
  bathrooms: 3,
  bedrooms: 4,
  content: "В самом центре престижной частной виллы, вымощенной и засаженной деревьями, со сторожем в резиденции, состоящей из старых домов с садами, очаровательного дома, особняка на 3..."
}, {
  title: "Вилла, LA MUETTE, AUTEUIL, PORTE DAUPHINE, PARIS",
  price: 26084400,
  img: "/photos/0/main.jpg",
  square: 180,
  bathrooms: 3,
  bedrooms: 4,
  content: "В самом центре престижной частной виллы, вымощенной и засаженной деревьями, со сторожем в резиденции, состоящей из старых домов с садами, очаровательного дома, особняка на 3..."
}];

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

export default () => {
  const homes = useSelector(s => s.homes.homes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [homes])
  return (
    <Wrapper>
      {
        items.map((i) => {
          return <Item i={i}/>
        })
      }
    </Wrapper>
  );
};
