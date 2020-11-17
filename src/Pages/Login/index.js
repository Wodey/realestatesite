import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: white;
  color: black;
  width: 20%;
  position: absolute;
  top: 20%;
  font-size: 1.1rem;
  left: 38%;
  box-shadow: 0px 1px 4px 0px black;
  padding: 25px;
  height: 400px;
  padding-bottom: 0;
  @media(max-width: 1024px) {
    width: 30%;
    left: 33%;
    top: 30%;
  }
  @media(max-width: 769px) {
    width: 40%;
    left: 30%;
  }
  @media(max-width: 426px) {
    width: 90%;
    left: 0;
    top: 0;
  }
`;

const TextHr = styled.div`
  text-align: center;
  &::before {
    content: "";
    background: black;
    height: 1px;
    width: 45%;
    position: absolute;
    left: 0;
    top: 37.5%;
  }
  &::after {
    content: "";
    background: black;
    height: 1px;
    width: 45%;
    position: absolute;
    right: 0;
    top: 37.5%;
  }
`;
const InlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const AltButton = styled.div`
  display: flex;
  padding: 10px;
  box-shadow: 0px 1px 4px 0px black;
  cursor: pointer;
`;
const AltButtonBody = styled.div`
  text-align: center;
  width: 80%;
`;
const Icon = styled.img`
  width: 1.5em;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1.1rem;
  color: #6e6e6e;
  border: none;
  border-bottom: 1px solid #6e6e6e;
  outline: none;
  &:hover {
    border: 1px solid #001bff;
  }
  &:focus {
    border: 1px solid #001bff;
  }
`;

const LoginBtn = styled.button`
  height: 50px;
  background: #ff0000;
  color: white;
  font-size: 1.3rem;
  text-transform: uppercase;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 1s;
  &:hover {
    background: #830000;
    transition: 1s;
  }
`;

const RegistrationWrapper = styled.div`
  background: #dddddd;
  margin: 0 -25px;
  padding: 15px 0;
`;
const RegistrationBody = styled.div`
  width: 45%;
  text-align: center;
  margin: auto;
`;
const RegistrationButton = styled.span`
  text-transform: uppercase;
  color: #ff0000;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Close = styled(Icon)`
  width: 0.9em;
  position: absolute;
  top: -1.5em;
  right: 0em;
  cursor: pointer;
  &:hover {
    filter: invert(22%) sepia(92%) saturate(5272%) hue-rotate(354deg) brightness(117%) contrast(130%);
  }
`;

export default function Login({closeLoginPage}) {
  return (
    <Wrapper>
      <InlineWrapper>
        <Close src="/close.svg" onClick={() => closeLoginPage()}/>
        <AltButton>
          <Icon src="/facebook.svg"/>
          <AltButtonBody>Login with FACEBOOK</AltButtonBody>
        </AltButton>
        <AltButton>
          <Icon src="/google.svg"/>
          <AltButtonBody>Login with GOOGLE</AltButtonBody>
        </AltButton>
        <TextHr>Or</TextHr>
        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Password" />
        <LoginBtn>Login</LoginBtn>
        <RegistrationWrapper>
          <RegistrationBody>
            Dont have account?
            <RegistrationButton>Register</RegistrationButton>
          </RegistrationBody>
        </RegistrationWrapper>
      </InlineWrapper>
    </Wrapper>
  )
}
