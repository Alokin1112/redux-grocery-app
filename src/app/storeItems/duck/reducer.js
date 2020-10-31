import types from './types';
import produce from 'immer';
const INITIAL_STATE={
    listName:"Items in Shop",
    list:[
        {
            id:0,
            name:"Apple",
            cost:1,
            unit:'kg',
        },
        {
            id:1,
            name:'Milk',
            cost:1.5,
            unit:"litr",
        },
        {
            id:2,
            name:'Water',
            cost:0.5,
            unit:'litr',
        },
        {
            id:3,
            name:'Chocolate',
            cost:5,
            unit:'bar'
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