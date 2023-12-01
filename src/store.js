import { combineReducers, applyMiddleware } from "redux"
import {legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer } from "./reducers/productReducers"
import { allSuppliersListReducer, inventoryListReducer } from "./reducers/supplyChainReducers"

const reducer = combineReducers({
    productList: productListReducer,
    inventoryList: inventoryListReducer,
    allSuppliersList: allSuppliersListReducer
    
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store