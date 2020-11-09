import React from 'react';
import ItemList from "./Components/ItemsList";
import SearchBar from "./Components/SearchBar";
import ExtraOptions from './Components/ExtraOptions';
import SortPanel from './Components/SortPanel';
import Pages from "./Components/Pages";
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(750px - 140px);
  background: white;
  width: 100%; 
  margin: auto;
`;

export default () => {
  return (
    <Wrapper>
      <SearchBar/>
      <ExtraOptions />
      <SortPanel />
      <ItemList />
      <Pages />
    </Wrapper>
  )
};
