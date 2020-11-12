import React from "react";
import styled from "styled-components";
import { StoreItemRender } from "./";
import { useSelector } from "react-redux";
import {Sort,IncreaseRender} from '../app/storeItems/components';

const Wrapper=styled.div`
  display: flex;
  width: 100vw;
  justify-content: flex-start;
  align-items:center;
  flex-flow:column nowrap;
  min-height:100vh;
`
const ProductsWrapper = styled.div`
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
  const storeItems = useSelector((state) => 
    state.storeItems.sort?
      state.storeItems.list.filter(item=>item.group==state.storeItems.sort)
      :state.storeItems.list
    );
  const slicer=useSelector((state)=>state.storeItems.renderSize);
  return (
    <>
      <Wrapper>
        <Sort/>
        <ProductsWrapper>
          <List>
            {storeItems.slice(0,slicer).map((item) => (
              <ListItem key={item.id}>
                <StoreItemRender item={item} />
              </ListItem>
            ))}
          </List>
        </ProductsWrapper>
        {storeItems.length>slicer?<IncreaseRender/>:null}
      </Wrapper>
    </>
  );
}
export default ShopPage;
