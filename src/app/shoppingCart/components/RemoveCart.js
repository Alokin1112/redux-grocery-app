import React from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import types from '../duck/actions';
const RemoveButton=styled.button`
    color:red;
    margin-top:0.5em;
    border-radius: 5px;
    border:none;
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.2),
    0 0 0 1px rgba(10, 10, 10, 0.06);
    width:100%;
    min-height:100%;
    font-size:1em;
    padding:0.25em;
    transition:background  .2s ease-in-out,color .2s ease-in-out;
    font-family:'Roboto',sans-serif;
    &:hover{
        cursor:pointer;
        background-color: #BBB;
        color:white;
    }
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