import React from 'react';
import styled from 'styled-components';

const HeaderWrapper=styled.header`
    width:100vw;
    display: flex;
    justify-content: center;
    align-content:center;
`
function Header(){
    return(
        <>
        <HeaderWrapper>
            HEADER
        </HeaderWrapper>
        </>
    )
}

export default Header