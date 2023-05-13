import { combineReducers } from 'redux';
import productReducer from './productsReducer'
import pageProductReducer from './pageProductReducer'
import currentProductReducer from './currentProductReducer'
import cartIremReducer from './cartItemReducer'
import updataDataReducer from './updateDataReducer'
import SearchProductReducer from './SearchProductReducer'
import currentUserReducer from './CurrentUserReducer'

const reducers = combineReducers({
    product: productReducer,
    page: pageProductReducer,
    currentProduct: currentProductReducer,
    cartItem: cartIremReducer,
    update: updataDataReducer,
    search: SearchProductReducer,
    user: currentUserReducer
})

export default reducers