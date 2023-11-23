import axios from "axios"
import { BASE_URL } from "../constants/commonConstants"
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"

export const listProducts = () => async (dispatch) => {
    debugger;
    try{
        dispatch({
            type: PRODUCT_LIST_REQUEST
        })
        
        const {data} = await axios.get(`http://localhost:3500/product`)

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