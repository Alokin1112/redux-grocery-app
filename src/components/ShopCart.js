import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {StoreItemRender} from './'; 
import {RemoveCart} from '../app/shoppingCart/components';

const List=styled.ul`
    list-style-type:none;
`

function ShopCart(){
    const Cart=useSelector(store=>store.shoppingCart.list)
    const ItemsToRender=useSelector(store=>store.storeItems.list.filter(item=>Cart.find(cartItem=>cartItem.id==item.id)?true:false))
    console.log(ItemsToRender);
    return(
    <>
        <p>Items in ShopCart</p>
        {ItemsToRender.length>0?<List>
            {ItemsToRender.map(item=><li key={item.id}><StoreItemRender item={item}/><RemoveCart id={item.id}/></li>)}
        </List>:<p>No Items in Cart</p>}
    </>
    )
}
export default ShopCart