import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
`;
const Logo = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0px 15px;
`;
const Items = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-around;
`;
const Item = styled.span`
  font-size: 1.3rem;
  cursor: pointer;
  a {
    text-decoration: none;
    color: black;
  }
`;

export default () => {
  return (
    <Wrapper>
      <Logo>realestate.com</Logo>
      <Items>
        <Item><Link to="/">List</Link></Item>
        <Item><Link to="/account">Account</Link></Item>
        <Item><Link to="/about">About</Link></Item>
      </Items>
    </Wrapper>
  )
}
