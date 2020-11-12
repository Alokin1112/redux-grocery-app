import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {StoreItemRender} from './'; 
import {RemoveCart} from '../app/shoppingCart/components';

const List=styled.ul`
    list-style-type:none;
    width:100%;
    display: flex;
    justify-content:center;
    flex-flow:column nowrap;
    align-items:center;
    & li{
    width:50%;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-flow:column nowrap;
    margin:1em auto;
    }
    @media(max-width:768px){
        & li{
            width:95%;
        }
    }
`
const Wrapper=styled.div`
    width:100vw;
    display: flex;
    justify-content: flex-start;
    align-items:center;
    flex-flow:column nowrap;
    min-height:100vh;
`
function ShopCart(){
    const Cart=useSelector(store=>store.shoppingCart.list)
    const ItemsToRender=useSelector(store=>store.storeItems.list.filter(item=>Cart.find(cartItem=>cartItem.id==item.id)?true:false))
    console.log(ItemsToRender);
    return(
    <>
        <Wrapper>
        <h3>Cart</h3>
        {ItemsToRender.length>0?<List>
            {ItemsToRender.map(item=>
            <li key={item.id}>
                <StoreItemRender item={item}/><RemoveCart id={item.id}/>
            </li>
            )}
        </List>:<h4>No Items in Cart, go to shop and buy something ;)</h4>}
        </Wrapper>
    </>
    )
}
export default ShopCart