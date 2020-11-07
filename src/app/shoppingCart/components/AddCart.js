import React from 'react';
import styled from 'styled-components';
import {useDispatch,useSelector} from 'react-redux';
import {shoppingActions} from '../duck';

function AddCart({id}){
    const dispatch=useDispatch();
    const handleIncresement=()=>{
        dispatch(shoppingActions.increase(id))
    }
    const handleDecresement=()=>{
        dispatch(shoppingActions.decrease(id))
    }
     const amount=useSelector(state=>state.shoppingCart.list.filter(it=>it.id===id))
    return(
        <>
        <button onClick={handleDecresement}>-</button>
        {amount.length>0?amount[0].amount:0}
        <button  onClick={handleIncresement}>+</button>
        </>
    )
}
export default AddCart;