import {combineReducers} from 'redux';
import storeItemsReducer from './app/storeItems/duck/reducer';
import shoppingCartReducer from './app/shoppingCart/duck/reducer';
const rootReducer=combineReducers({
    storeItems:storeItemsReducer,
    shoppingCart:shoppingCartReducer,
})
export default rootReducer;