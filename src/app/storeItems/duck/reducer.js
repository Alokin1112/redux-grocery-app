import types from './types';
import produce from 'immer';
const UNITS={
    kg:'kg',
    litr:'litr',
    bar:'bar',
}
const GROUP={
    fruit:'fruit',
    drink:'drink',
    dairy:'dairy',
    sweetness:'sweetness',
}
const INITIAL_STATE={
    listName:"Items in Shop",
    list:[
        {
            id:0,
            name:"Apple",
            cost:1,
            unit:UNITS.kg,
            group:GROUP.fruit,
        },
        {
            id:1,
            name:'Milk',
            cost:1.5,
            unit:UNITS.litr,
            group:GROUP.dairy,
        },
        {
            id:2,
            name:'Water',
            cost:0.5,
            unit:UNITS.litr,
            group:GROUP.drink,
        },
        {
            id:3,
            name:'Chocolate',
            cost:5,
            unit:UNITS.bar,
            group:GROUP.sweetness,
        }
    ]
}

const storeItemsReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type){
        case types.ADD_TO_STORE:
            return produce(state,draftState=>{
                draftState.list.push(action.item)
            })
        case types.REMOVE_FROM_STORE:
            return produce(state,draftState=>{
                draftState.list=draftState.list.filter(item=>item.id!==action.id)
            })
        case types.RESET_STORE_LIST:
            return produce(state,draftState=>{
                draftState.list=[]
            })
        default:
            return state;
    }
}
export default storeItemsReducer;