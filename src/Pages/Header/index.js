import React from 'react';
import styled from 'styled-components';
import {Link,useHistory} from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  align-items: center;
  background: black;
  width: 100%;
`;
const Logo = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0px 15px;
  color: white;
`;
const Items = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-around;
  @media(max-width: 768px) {
    width: 30%;
  }
  @media(max-width: 426px) {
    width: 50%;
  }
`;
const Item = styled.span`
  font-size: 1.3rem;
  cursor: pointer;
  a {
    text-decoration: none;
    color: white;
  }
`;

export default function Header () {
  const address = useHistory().location.pathname;
  return (
    <Wrapper>
      <Logo>realestate.com</Logo>
      <Items>
        <Item isOn={address === "/"}><Link to="/">List</Link></Item>
        <Item isActive={address === "/about"}><Link to="/about">About</Link></Item>
        <Item><Link to="/sell">Sell</Link></Item>
      </Items>
    </Wrapper>
  )
}
