import { ALL_SUPPLIERS_LIST_FAILURE, ALL_SUPPLIERS_LIST_REQUEST, ALL_SUPPLIERS_LIST_SUCCESS } from "../constants/supplierConstants";
import { INVENTORY_LIST_FAILURE, INVENTORY_LIST_REQUEST, INVENTORY_LIST_SUCCESS, SUPPLIER_TYPES_FAILURE, SUPPLIER_TYPES_REQUEST, SUPPLIER_TYPES_SUCCESS } from "../constants/supplyChainConstants";

export const inventoryListReducer = (state = {inventory: []}, action) => {
    switch(action.type){
        case INVENTORY_LIST_REQUEST:
            return{
                loading: true
            }
        case INVENTORY_LIST_SUCCESS:
            debugger;
            return{
                loading: false,
                inventory: action.payload
            }
        case INVENTORY_LIST_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const allSuppliersListReducer = (state = {allSuppliers: []}, action) => {
    switch(action.type){
        case ALL_SUPPLIERS_LIST_REQUEST:
            return{
                loading: true
            }
        case ALL_SUPPLIERS_LIST_SUCCESS:
            return{
                loading: false,
                allSuppliers: action.payload
            }
        case ALL_SUPPLIERS_LIST_FAILURE:
            return{
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const allSupplierTypesReducer = (state = {allSupplierTypes: []}, action) => {
    switch(action.type){
        case SUPPLIER_TYPES_REQUEST:
            return{
                loading: true
            }
        case SUPPLIER_TYPES_SUCCESS:
            return{
                loading: false,
                allSupplierTypes: action.payload
            }
        case SUPPLIER_TYPES_FAILURE:
            return{
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}