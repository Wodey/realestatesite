import React,{useEffect} from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from "react-redux";
import {openExtraOptions, openExtraOption, closeExtraOptions} from "../../../services/extraOptionsReducer/actions";
import {OPENEDOPTIONS} from '../../../services/extraOptionsReducer/actionsTypes';
import {Price} from "./OptionsUtills";

const OutlineWrapper = styled.div`
    display: ${props => props.isOpen ? "block" : "none"};
    position: absolute;
    user-select: none;
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
  color: ${props => props.isActive ? "red" : "black"};
  &:hover {
    background: #e6e6e6;
  }

`;


export default () => {
  const isOpen = useSelector(s => s.extraOptions.isOpen)
  const price = useSelector(s => s.extraOptions.price);
  const square = useSelector(s => s.extraOptions.square);
  const bedrooms = useSelector(s => s.extraOptions.bedrooms);
  const bathrooms = useSelector(s => s.extraOptions.bathrooms);

  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if(!!isOpen) {
        dispatch(closeExtraOptions());
      }

      return () => {
        window.removeEventListener("click");
      }
    })
  })
  return (
    <OutlineWrapper isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
      <Wrapper>
        <ItemTitle isActive={price} onClick={() => dispatch(openExtraOption(OPENEDOPTIONS.PRICE))}>Price</ItemTitle>
        <ItemTitle isActive={square} onClick={() => dispatch(openExtraOption(OPENEDOPTIONS.SQUARE))}>Square</ItemTitle>
        <ItemTitle isActive={bedrooms} onClick={() => dispatch(openExtraOption(OPENEDOPTIONS.BEDROOMS))}>Bedrooms</ItemTitle>
        <ItemTitle isActive={bathrooms} onClick={() => dispatch(openExtraOption(OPENEDOPTIONS.BATHROOMS))}>Bathrooms</ItemTitle>
      </Wrapper>
    </OutlineWrapper>
  )
}
