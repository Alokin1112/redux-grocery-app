import React from 'react';
import styled from 'styled-components';
import {AddCart} from '../app/shoppingCart/components';

function StoreItemRender({item}){
    return(
        <>
        {item.name}:
        <AddCart id={item.id}/>
        </>
    )
}

export default StoreItemRender;