import { combineReducers } from 'redux';
import productReducer from './productsReducer'


const reducers = combineReducers({
    product: productReducer,
})

export default reducers