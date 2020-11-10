import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Text = styled.div`
  width: 15%;
  font-size: 1.3rem;
  color: white;
  background: black;
  padding: 15px;
  text-align: center;
  @media(max-width: 768px) {
    width: 30%;
  }
  @media(max-width: 426px) {
    width: 40%;
  }
  @media(max-width: 376px) {
    width: 45%;
  }
  @media(max-width: 320px) {
    width: 60%;
  }
`;

export default function About () {
  return (
    <Wrapper>
      <Text>
      Hi, it is my real estate website. On this website, you can find real estate for rent/buy, sell own real estate, login/register.
      </Text>
    </Wrapper>
  )
};
