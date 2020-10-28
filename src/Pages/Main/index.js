import React from 'react';
import ItemList from "./Components/ItemsList";
import SearchBar from "./Components/SearchBar";
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  justify-content: center;
`;

export default () => {
  return (
    <Wrapper>
      <SearchBar />
      <ItemList />
    </Wrapper>
  )
};
