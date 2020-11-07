import React from "react";
import styled from "styled-components";
import { StoreItemRender } from "./";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;
const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80vw;
  flex-flow: row wrap;
  padding:0;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    width: 100vw;
  }
`;
const ListItem = styled.li`
  width: 30%;
  margin:0.75em 0;
  @media(max-width:768px){
      width: 90%;
  }
`;
function ShopPage() {
  const storeItems = useSelector((state) => state.storeItems);
  return (
    <>
      <Wrapper>
        <List>
          {storeItems.list.map((item) => (
            <ListItem key={item.id}>
              <StoreItemRender item={item} />
            </ListItem>
          ))}
        </List>
      </Wrapper>
    </>
  );
}
export default ShopPage;
