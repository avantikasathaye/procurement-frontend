import axios from "axios"
import { BASE_URL } from "../constants/commonConstants"
import { INVENTORY_LIST_FAILURE, INVENTORY_LIST_REQUEST, INVENTORY_LIST_SUCCESS, SUPPLIER_TYPES_FAILURE, SUPPLIER_TYPES_REQUEST, SUPPLIER_TYPES_SUCCESS } from "../constants/supplyChainConstants"
import { ADD_NEW_SUPPLIER_FAILURE, ADD_NEW_SUPPLIER_REQUEST, ADD_NEW_SUPPLIER_SUCCESS, ALL_SUPPLIERS_LIST_FAILURE, ALL_SUPPLIERS_LIST_REQUEST, ALL_SUPPLIERS_LIST_SUCCESS } from "../constants/supplierConstants"

export const getInventory = () => async (dispatch) => {
    debugger;
    try{
        dispatch({
            type: INVENTORY_LIST_REQUEST
        })

        const {data} = await axios.get("http://localhost:4000/api/inventory")

        dispatch({
            type: INVENTORY_LIST_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: INVENTORY_LIST_FAILURE,
            payload: error.response && error.response.data.message 
                    ? error.response.data.message 
                    : error.message
        })
    }
}

export const getAllSuppliers = () => async (dispatch) => {
    try{
        dispatch({
            type: ALL_SUPPLIERS_LIST_REQUEST
        })

        const {data} = await axios.get(`http://localhost:4000/api/suppliers`);

        dispatch({
            type:ALL_SUPPLIERS_LIST_SUCCESS,
            payload: data
        })

    }catch(error){
        dispatch({
            type: ALL_SUPPLIERS_LIST_FAILURE,
            payload: error.response && error.response.data.message 
                    ? error.response.data.message 
                    : error.message
        })
    }
}

export const addNewSupplier = (supplierData) => async(dispatch) => {
    try{
        dispatch({
            type: ADD_NEW_SUPPLIER_REQUEST
        })
        debugger;

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const {data} = await axios.post(`${BASE_URL}/api/add-supplier`, supplierData, config)

        dispatch({
            type: ADD_NEW_SUPPLIER_SUCCESS,
            payload: data
        })

        removeLocalStorageItems(supplierData)
    }catch(error){
        dispatch({
            type: ADD_NEW_SUPPLIER_FAILURE,
            payload: error.response && error.response.data.message 
                    ? error.response.data.message 
                    : error.message
        })
    }
}

const removeLocalStorageItems = (dataToBeRemoved) => {
    debugger;
    Object.keys(dataToBeRemoved).forEach((item) => {
        localStorage.removeItem(item);
    })
}

export const getAllSupplierTypes = () => async (dispatch) => {
    try{
        dispatch({
            type: SUPPLIER_TYPES_REQUEST
        })

        const {data} = await axios.get(`${BASE_URL}/api/supplier-types`)
        debugger;
        dispatch({
            type: SUPPLIER_TYPES_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: SUPPLIER_TYPES_FAILURE,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        })
    }
}