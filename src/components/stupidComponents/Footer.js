import React from 'react';
import styled from 'styled-components';

const FooterWrapper=styled.footer`
    width:100vw;
    display: flex;
    justify-content: center;
    align-content:center;
`
function Footer(){
    return(
        <>
            <FooterWrapper>
                FOOTER
            </FooterWrapper>
        </>
    )
}
export default Footer;