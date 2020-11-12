import React from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import actions from '../duck/actions';

function IncreaseRender(){
    const dispatch=useDispatch();
    const handleClick=()=>{
        dispatch(actions.increase_render(6))
    }
    return(
        <>
            <button onClick={handleClick}>Render More</button>
        </>
    )
}
export default IncreaseRender;