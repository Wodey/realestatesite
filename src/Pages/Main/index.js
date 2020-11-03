import React from 'react';
import ItemList from "./Components/ItemsList";
import SearchBar from "./Components/SearchBar";
import ExtraOptions from './Components/ExtraOptions';
import Footer from "./Components/Footer";
import SortPanel from './Components/SortPanel';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export default () => {
  return (
    <Wrapper>
      <SearchBar/>
      <ExtraOptions />
      <SortPanel />
      <ItemList />
      <Footer />
    </Wrapper>
  )
};
