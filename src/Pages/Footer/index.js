import React from 'react';
import styled from 'styled-components';

const OutlineWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: black;
`;
const InlineWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;

`;
const Items = styled.div`
  display: flex;
  width: 22%;
  justify-content: space-around;
`;
const Item = styled.span`
  font-size: 1.2rem;
  color: white;
  cursor: pointer;

`;
export default () => {
  return (
    <OutlineWrapper>
      <InlineWrapper>
        <Items>
          <Item>Instagram</Item>
          <Item>Facebook</Item>
          <Item>Github</Item>
        </Items>
      </InlineWrapper>
    </OutlineWrapper>
  );
};
