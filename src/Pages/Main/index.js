import React from 'react';
import ItemList from "./Components/ItemsList";
import SearchBar from "./Components/SearchBar";
import Footer from "./Components/Footer";
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
      <SearchBar />
      <ItemList />
      <Footer />
    </Wrapper>
  )
};
