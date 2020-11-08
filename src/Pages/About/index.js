import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 512px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  width: 20%;
  font-size: 1.3rem;
  background: rgb(221, 57, 34);
  color: white;
  padding: 15px;
  text-align: center;
`;

export default () => {
  return (
    <Wrapper>
      <Text>
      Hi, it is my real estate website. On this website, you can find real estate for rent/buy, sell own real estate, login/register.
      </Text>
    </Wrapper>
  )
};
