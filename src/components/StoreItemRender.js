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
  flex-flow: row nowrap;
`;
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
`;
function StoreItemRender({ item }) {
  return (
    <>
      <Wrapper>
        <div>
          <Title>{item.name}</Title>
          <Group>{item.group}</Group>
          <AddCart id={item.id} />
        </div>
        <Price>{item.price}</Price>
      </Wrapper>
    </>
  );
}

export default StoreItemRender;
