import React from 'react';
import styled,{createGlobalStyle} from 'styled-components';
import {Header,Footer} from './components/stupidComponents';
import {ShopPage,ShopCart,Nav} from './components';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

const Global=createGlobalStyle`
  *{
    box-sizing:border-box;
  }
  body{
    background-color: #fff;
    color:#222;
    display:flex;
    justify-content: center;
    align-content:center;
    flex-flow:column nowrap;
    overflow-x:hidden;
    margin:0;
    max-width:100vw ;
  }
`

function App() {
  return (
    <>
    <Global/>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={ShopPage}/>
          <Route path='/cart' exact component={ShopCart}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
