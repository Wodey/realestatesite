import React from 'react';
import Item from './Item';
import styled from 'styled-components';

const items = [{
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
  padding: 5px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
`;

export default () => {
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
