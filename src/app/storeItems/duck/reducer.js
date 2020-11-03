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
            img:"https://img.freepik.com/free-vector/hand-drawn-apple-fruit-illustration_53876-2980.jpg?size=338&ext=jpg",
        },
        {
            id:1,
            name:'Milk',
            cost:1.5,
            unit:UNITS.litr,
            group:GROUP.dairy,
            img:"https://img.icons8.com/plasticine/452/pack-of-milk.png",
        },
        {
            id:2,
            name:'Water',
            cost:0.5,
            unit:UNITS.litr,
            group:GROUP.drink,
            img:"https://www.freepngimg.com/thumb/bottle/27683-6-water-bottle-icon.png",
        },
        {
            id:3,
            name:'Chocolate',
            cost:5,
            unit:UNITS.bar,
            group:GROUP.sweetness,
            img:"https://img.pngio.com/chocolate-bar-icon-chocolate-bar-png-1600_1600.png",
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