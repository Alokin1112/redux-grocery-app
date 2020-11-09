import React from "react";
import styled from "styled-components";
import { AddCart } from "../app/shoppingCart/components";

const Wrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 1em;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.2),
    0 0 0 1px rgba(10, 10, 10, 0.06);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column nowrap;
`;
const InfoWrapper=styled.div`
  width:100%;
  display:flex;
  justify-content: space-between;
  align-items:center;
  flex-flow:row nowrap;
`
const Title = styled.h1`
  margin: 0;
  padding: 0.1em 0;
`;
const Group = styled.h5`
  margin: 0;
  padding: 0.2em 0;
  color: #666;
`;
const Price = styled.h1`
  color: #4fd380;
  margin: auto 0.5em;
  padding: 0;
  font-size: 3em;
  &::after{
    content:'zł';
  }
`;
const ProductImage=styled.img`
  width:5vw;
  height:5vw ;
  min-height:64px;
  min-width:64px;
`
function StoreItemRender({ item }) {
  return (
    <>
      <Wrapper>
        <InfoWrapper>
          <div>
          <Title>{item.name}</Title>
          <Group>{item.group}</Group>
          </div>
          <ProductImage alt={item.name+' photo'} src={item.img}/>
        </InfoWrapper>
        <InfoWrapper>
          <AddCart id={item.id} />
          <Price>{item.price}</Price>
        </InfoWrapper>
      </Wrapper>
    </>
  );
}

export default StoreItemRender;
