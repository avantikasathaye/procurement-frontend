import axios from "axios"
import { BASE_URL } from "../constants/commonConstants"
import { ADD_NEW_PRODUCT_FAILURE, ADD_NEW_PRODUCT_REQUEST, ADD_NEW_PRODUCT_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"
import {removeLocalStorageItems} from './commonActions'
import { ShowToasts } from "../components/statelessViews"


export const listProducts = () => async (dispatch) => {
    debugger;
    try{
        dispatch({
            type: PRODUCT_LIST_REQUEST
        })
        
        const {data} = await axios.get(`http://localhost:4000/api/products`)

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    }
    catch(error){
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message 
                    ? error.response.data.message 
                    : error.message
        })
    }
}

export const addNewProduct = (productData) => async(dispatch) => {
    try{
        dispatch({
            type: ADD_NEW_PRODUCT_REQUEST
        })
        debugger;

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const {data} = await axios.post(`${BASE_URL}/api/add-product`, productData, config)

        dispatch({
            type: ADD_NEW_PRODUCT_SUCCESS,
            payload: data
        })
        
        ShowToasts("Product Added Successfully!")

        removeLocalStorageItems(productData)
    }catch(error){
        dispatch({
            type: ADD_NEW_PRODUCT_FAILURE,
            payload: error.response && error.response.data.message 
                    ? error.response.data.message 
                    : error.message
        })
    }
}