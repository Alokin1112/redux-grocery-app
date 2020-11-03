import types from './types';
const increase=id=>({
    type:types.INCREASE_IN_SHOPPING_CART,id,
})
const decrease=id=>({
    type:types.DECREASE_IN_SHOPPING_CART,id
})
const remove=id=>({
    type:types.REMOVE_FROM_SHOPPING_CART,id,
})
const reset=item=>({
    type:types.RESET_SHOPPING_CART,item
})
export default{
    increase,
    decrease,
    remove,
    reset,
}