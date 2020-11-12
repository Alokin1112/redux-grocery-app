import types from './types'

const add=(item)=>({
    type:types.ADD_TO_STORE,item
})
const remove=(id)=>({
    type:types.REMOVE_FROM_STORE,id
})
const reset=(item)=>({
    type:types.RESET_STORE_LIST,item
})
const sort=(group)=>({
    type:types.CHANGE_SORT,group
})
const resert_sort=()=>({
    type:types.RESET_SORT,
})
const increase_render=(amount)=>({
    type:types.INCREASE_RENDER,amount
})
export default{
    add,
    remove,
    reset,
    sort,
    resert_sort,
    increase_render,
}