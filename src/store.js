import { combineReducers, applyMiddleware } from "redux"
import {legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer } from "./reducers/productReducers"
import { allSupplierTypesReducer, allSuppliersListReducer, inventoryListReducer } from "./reducers/supplyChainReducers"
import { loginReducer } from "./reducers/userReducers"

const reducer = combineReducers({
    login: loginReducer,
    productList: productListReducer,
    inventoryList: inventoryListReducer,
    allSuppliersList: allSuppliersListReducer,
    allSupplierTypes: allSupplierTypesReducer
    
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store