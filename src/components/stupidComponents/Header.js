import React from 'react';
import styled from 'styled-components';
import {Nav} from '../'
const HeaderWrapper=styled.header`
    width:100vw;
    display: flex;
    flex-flow:row nowrap;
    justify-content: space-between;
    align-items:center;
    background-color: #4FD380;
    color:white;
    height:4em;
    margin-bottom:2em;
    font-family:'Lato', sans-serif;
    @media (max-width:768px){
        height:3em;
        //flex-direction:column;
        justify-content: center;
    }
`
const Title=styled.h3`
    margin: 0;
    padding: 0;
    font-size:2.5em;
    margin-left:1.5em;
    @media (max-width:768px){
        margin:0;
    }
`
function Header(){
    return(
        <>
        <HeaderWrapper>
            <Title>Online Shop</Title>
            <Nav/>
        </HeaderWrapper>
        </>
    )
}

export default Header