import React from 'react';
import styled,{createGlobalStyle} from 'styled-components';
import {useSelector} from 'react-redux';
import {Header,Footer} from './components/stupidComponents';
import {StoreItemRender} from './components'
const Global=createGlobalStyle`
  *{
    box-sizing:border-box;
  }
  body{
    background-color: #363536;
    color:#fff;
    display:flex;
    justify-content: center;
    align-content:center;
    flex-flow:column nowrap;
    overflow-x:hidden;
  }
`
const List=styled.ul`
  list-style-type:none;
`
function App() {
  const storeItems=useSelector(state=>state.storeItems)
  return (
    <>
    <Global/>
      <Header/>
      <List>
        {storeItems.list.map(item=><li key={item.id}><StoreItemRender item={item}/></li>)}
      </List>
      <Footer/>
    </>
  );
}

export default App;
