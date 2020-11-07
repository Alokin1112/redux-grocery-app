import React,{useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
const SLink=styled(Link)`
    color:white;
    text-decoration:none;
    padding:0.25em;
    &:hover{
        color:green;
        cursor:pointer;
    }
`
const NavList=styled.ul`
    display:flex;
    flex-flow:row nowrap;
    justify-content: space-between;
    align-items:center;
    font-size:1.5em;
    transition: all .1s ease-in-out;
    @media(max-width:768px){
        
        transform:${({open})=>open?'translateX(0)':'translateX(100vw)'};
        transform-origin:1px;
        position:absolute;
        flex-flow:column nowrap;
        top:2em;
        background-color:#4FD380;
        margin: 0;
        width:100vw;
    }
`
const NavItem=styled.li`
    margin:1em;
`
const ShopIcon=styled.h2`
    background-color:rgba(256,256,256,0.4);
    margin-right:1.5em;
    border-radius:100%;
    width:1.5em;
    height:1.5em;
    display: flex;
    justify-content: center;
    align-items:center;
    @media (max-width:768px){
        margin:0;
    }
`
const Hamburger=styled.button`
    border:none;
    background-color:transparent;
    color:white;
    font-weight:bold;
    font-size:2em;
    transform:rotate(90deg);
    display:none;
    @media(max-width:768px){
        display:block;
    }
`
function Nav(){
    const amount=useSelector(store=>store.shoppingCart.list.length);
    const[open,setOpen]=useState(false);
    const handleOpen=()=>{
        setOpen(state=>!state);
    }
    return(
        <>
            <NavList open={open}>
                <NavItem onClick={handleOpen}><SLink to="/">Home</SLink></NavItem>
                <NavItem onClick={handleOpen}><SLink to="/cart">Cart</SLink></NavItem>
                <NavItem onClick={handleOpen}>About</NavItem>
                <NavItem onClick={handleOpen}>Contact</NavItem>
            </NavList>
            <SLink to="/cart"><ShopIcon>{amount}</ShopIcon></SLink>
            <Hamburger onClick={handleOpen}>III</Hamburger>
            
        </>
    )
}
export default Nav;