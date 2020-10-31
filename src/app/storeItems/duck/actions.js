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
export default{
    add,
    remove,
    reset,
}