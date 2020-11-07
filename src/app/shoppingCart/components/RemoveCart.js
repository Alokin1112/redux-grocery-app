import React from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import types from '../duck/actions';
const RemoveButton=styled.button`
    color:red;
`
function RemoveCart({id}){
    const dispatch=useDispatch();
    const handleClick=()=>{
        dispatch(types.remove(id))
    }
    return(
        <>
            <RemoveButton onClick={handleClick}>Remove</RemoveButton>
        </>
    )
}
export default RemoveCart;