import types from './types';
import produce from 'immer';
import GROUP from './group'
const UNITS={
    kg:'kg',
    litr:'litr',
    bar:'bar',
}

const INITIAL_STATE={
    listName:"Items in Shop",
    sort:null,
    renderSize:3,
    list:[
        {
            id:0,
            name:"Apple",
            price:1,
            unit:UNITS.kg,
            group:GROUP.fruit,
            img:"https://img.freepik.com/free-vector/hand-drawn-apple-fruit-illustration_53876-2980.jpg?size=338&ext=jpg",
        },
        {
            id:1,
            name:'Milk',
            price:1.5,
            unit:UNITS.litr,
            group:GROUP.dairy,
            img:"https://img.icons8.com/plasticine/452/pack-of-milk.png",
        },
        {
            id:2,
            name:'Water',
            price:0.5,
            unit:UNITS.litr,
            group:GROUP.drink,
            img:"https://www.freepngimg.com/thumb/bottle/27683-6-water-bottle-icon.png",
        },
        {
            id:3,
            name:'Chocolate',
            price:5,
            unit:UNITS.bar,
            group:GROUP.sweetness,
            img:"https://img.pngio.com/chocolate-bar-icon-chocolate-bar-png-1600_1600.png",
        },
        {
            id:4,
            name:'Cheese',
            price:3,
            unit:UNITS.kg,
            group:GROUP.dairy,
            img:'https://cdn.iconscout.com/icon/free/png-256/cheese-1806482-1534540.png',
        },
        {
            id:5,
            name:'Bar',
            price:6,
            unit:UNITS.bar,
            group:GROUP.sweetness,
            img:'https://icons-for-free.com/iconfiles/png/512/chocolate+bar-1319971786264794841.png',
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
        case types.CHANGE_SORT:
            return produce(state,draftState=>{
                draftState.sort=action.group;
            })
        case types.RESET_SORT:
            return produce(state,draftState=>{
                draftState.sort=null;
            })
        case types.INCREASE_RENDER:
            return produce(state,draftState=>{
                draftState.renderSize+=action.amount
            })
        default:
            return state;
    }
}
export default storeItemsReducer;