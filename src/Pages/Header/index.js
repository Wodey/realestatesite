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
  box-sizing: border-box;
  padding: 0 10%;
  margin-bottom: 4%;
  a {
    color: white;
    text-decoration: none;
  }
`;
const Logo = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0px 15px;
  color: white;
`;
const Items = styled.div`
  display: flex;
  width: 15%;
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
  color: white;
  a {
    text-decoration: none;
    color: white;
  }
`;

export default function Header ({openLoginPage}) {
  const address = useHistory().location.pathname;
  return (
    <Wrapper>
      <Link to="/"><Logo>realestate.com</Logo></Link>
      <Items>
        <Item isActive={address === "/login"} onClick={() => openLoginPage()}>Login</Item>
        <Item><Link to="/sell">Sell</Link></Item>
      </Items>
    </Wrapper>
  )
}
