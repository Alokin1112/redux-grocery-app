import React,{useState} from 'react';
import styled from 'styled-components';
import {useDispatch,useSelector} from 'react-redux';
import {shoppingActions} from '../app/shoppingCart/duck';

function StoreItemRender({item}){
    const dispatch=useDispatch();
    const handleIncresement=()=>{
        dispatch(shoppingActions.increase(item.id))
    }
    const handleDecresement=()=>{
        dispatch(shoppingActions.decrease(item.id))
    }
     const amount=useSelector(state=>state.shoppingCart.list.filter(it=>it.id==item.id))
     console.log(amount[0]);
    return(
        <>
        {item.name}
        <button onClick={handleDecresement}>-</button>
        {amount.length>0?amount[0].amount:0}
        <button  onClick={handleIncresement}>+</button>
        </>
    )
}

export default StoreItemRender;