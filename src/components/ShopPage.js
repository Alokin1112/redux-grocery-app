import React from 'react';
import styled from 'styled-components';
import {StoreItemRender} from './';
import {useSelector} from 'react-redux';

const List=styled.ul`
    list-style-type:none;
`
function ShopPage(){
    const storeItems=useSelector(state=>state.storeItems)
    return(
        <>
        <List>
        {storeItems.list.map(item=><li key={item.id}><StoreItemRender item={item}/></li>)}
        </List>
        </>
    )
}
export default ShopPage;