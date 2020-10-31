import React from 'react';
import styled,{createGlobalStyle} from 'styled-components';
import {useSelector} from 'react-redux';

const Global=createGlobalStyle`
  body{
    background-color: #363536;
    color:#fff;
    display:flex;
    justify-content: center;
    align-content:center;
  }
`
function App() {
  const storeItems=useSelector(state=>state.storeItems)
  return (
    <>
    <Global/>
      <ul>
      {storeItems.list.map(item=><li>{item.name}</li>)}
      </ul>
    </>
  );
}

export default App;
