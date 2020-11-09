import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { shoppingActions } from "../duck";

const Wrapper = styled.div`
  height: 2.5em;
  display:flex;
  justify-content: center;
  align-items:center;
  flex-flow:row nowrap;
  width:60%;
`;
const Button=styled.button`
  height:100%;
  width:33%;
  background-color: #EEE;
  color:#222;
  border:1px solid #222;
  &:hover{
    cursor:pointer;
    background-color:#ddd;
  }
  &:first-child{
    border-bottom-left-radius:5px;
    border-top-left-radius:5px;
  }
  &:last-child{
    border-bottom-right-radius:5px;
    border-top-right-radius:5px;
  }
`
const AmountNumber=styled.p`
  width:40%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items:center;
  border-top:1px solid #222;
  border-bottom:1px solid #222;
`
function AddCart({ id }) {
  const dispatch = useDispatch();
  const handleIncresement = () => {
    dispatch(shoppingActions.increase(id));
  };
  const handleDecresement = () => {
    dispatch(shoppingActions.decrease(id));
  };
  const amount = useSelector((state) =>
    state.shoppingCart.list.filter((it) => it.id === id)
  );
  return (
    <>
      <Wrapper>
        <Button onClick={handleDecresement}>-</Button>
        <AmountNumber>{amount.length > 0 ? amount[0].amount : 0}</AmountNumber>
        <Button onClick={handleIncresement}>+</Button>
      </Wrapper>
    </> 
  );
}
export default AddCart;
