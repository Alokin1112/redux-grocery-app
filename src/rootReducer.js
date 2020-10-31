import {combineReducers} from 'redux';
import storeItemsReducer from './app/storeItems/duck/reducer';
const rootReducer=combineReducers({
    storeItems:storeItemsReducer,
})
export default rootReducer;