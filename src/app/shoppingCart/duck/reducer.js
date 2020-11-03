import types from './types';
import produce from 'immer';
const INITIAL_STATE={
    listName:"Shopping Cart",
    list:[],
}
const shoppingCartReducer=(state=INITIAL_STATE,action)=>{
    let isCreated=false;
    switch(action.type){
        case types.INCREASE_IN_SHOPPING_CART:
            return produce(state,draftState=>{
               state.list.map(item=>{if(item.id==action.id)isCreated=true;})
               isCreated?
               draftState.list=state.list.map(item=>item.id==action.id?{id:item.id,amount:item.amount+1}:item)
               :
               draftState.list.push({id:action.id,amount:1})
            })
        case types.DECREASE_IN_SHOPPING_CART:
            return produce(state,draftState=>{
               draftState.list=state.list.map(item=>item.id==action.id&&item.amount>0?(item.amount==1?{}:{id:item.id,amount:item.amount-1}):item).filter(item=>item.id!=undefined)
            })
        case types.REMOVE_FROM_SHOPPING_CART:
            return produce(state,draftState=>{
                draftState.list=state.list.map(item=>item.id==action.id?null:item)
            })
        case types.RESET_SHOPPING_CART:
            return produce(state,draftState=>{
                draftState.list=[];
            })
        default:
            return state;
    }
}
export default shoppingCartReducer;