import React from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from "react-redux";
import {nextPage, prevPage, setPage} from "../../../services/pagesReducer/actions.js";
const OutlineWrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 375px;
  margin: auto;
  @media(max-width: 768px) {
    width: 32%;
  }
  @media(max-width: 426px) {
    width: 65%;
  }
  @media(max-width: 376px) {
    width: 70%;
  }
  @media(max-width: 320px) {
    width: 95%;
  }
`;
const Button = styled.button`
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 1.3rem;
  &:hover {
    color: red;
  }
`;
const Item = styled.span`
  font-size: 1.3rem;
  cursor: pointer;
  color: ${props => props.activated ? "red" : "black"};
`;
const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


export default function Pages() {
  const dispatch = useDispatch();
  const current = useSelector(s => s.pages.current);
  return (
    <OutlineWrapper>
      <Wrapper>
        <Button onClick={() => dispatch(prevPage())} disabled={current === 0}>Prev</Button>
        {
          current > 3 ? <><Item onClick={() => dispatch(setPage(0))}>1</Item><Item>...</Item></> : ""
        }
        {
          current === 3 ? <Item onClick={() => dispatch(setPage(0))}>1</Item> : ""
        }
        {
          current > 1 ? <Item onClick={() => dispatch(setPage(current - 2))}>{pages[current-2]}</Item> : ""
        }
        {
          current > 0 ? <Item onClick={() => dispatch(setPage(current - 1))}>{pages[current-1]}</Item> : ""
        }
          <Item activated={true}>{pages[current]}</Item>
        {
          current <= pages.length - 2 ? <Item onClick={() => dispatch(setPage(current + 1))}>{pages[current + 1]}</Item> : ""
        }
        {
            current <= pages.length - 3 ? <Item onClick={() => dispatch(setPage(current + 2))}>{pages[current + 2]}</Item> : ""
        }
        {
          current === pages.length - 4 ? <Item onClick={() => dispatch(setPage(pages.length - 1))}>{pages.length}</Item> : ""
        }
        {
          current < pages.length - 4 ? <><Item>...</Item><Item onClick={() => dispatch(setPage(pages.length - 1))}>{pages.length}</Item></> : ""
        }
        <Button onClick={() => dispatch(nextPage())} disabled={current === pages.length - 1}>Next</Button>
      </Wrapper>
    </OutlineWrapper>
  )
}
