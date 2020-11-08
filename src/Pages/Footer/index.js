import React from 'react';
import styled from 'styled-components';

const OutlineWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  background: transparent;
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
  @media(max-width: 1024px) {
    width: 25%;
  }
  @media(max-width: 768px) {
    width: 32%;
  }
  @media(max-width: 426px) {
    width: 55%;
  }
  @media(max-width: 376px) {
    width: 70%;
  }
  @media(max-width: 320px) {
    width: 100%;
  }
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
