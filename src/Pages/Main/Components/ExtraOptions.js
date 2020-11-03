import React,{useEffect} from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from "react-redux";
import {openExtraOptions} from "../../../services/extraOptionsReducer/actions";

const OutlineWrapper = styled.div`
    display: ${props => props.isOpen ? "block" : "none"};
    position: absolute;
    top: 180px;
    right: 560px;
`;
const Wrapper = styled.div`
  width: 140px;
  display: flex;
  flex-direction: column;
  @media(max-width: 376px) {
      width: 300px;
  }
`;

const ItemTitle = styled.span`
  padding: 8px 7px;
  font-size: 1.1rem;
  cursor: pointer;
  background: white;
  &:hover {
    background: #e6e6e6;
  }

`;


export default () => {
  const isOpen = useSelector(s => s.extraOptions.isOpen)
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if(isOpen) {
        dispatch(openExtraOptions());
      }

      return () => {
        window.removeEventListener("click");
      }
    })
  })
  return (
    <OutlineWrapper isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
      <Wrapper>
        <ItemTitle>Price</ItemTitle>
        <ItemTitle>Square</ItemTitle>
        <ItemTitle>Bedrooms</ItemTitle>
        <ItemTitle>Bathrooms</ItemTitle>
      </Wrapper>
    </OutlineWrapper>
  )
}
