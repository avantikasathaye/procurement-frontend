import axios from "axios"
import { INVENTORY_LIST_FAILURE, INVENTORY_LIST_REQUEST, INVENTORY_LIST_SUCCESS } from "../constants/supplyChainConstants"

export const getInventory = () => async (dispatch) => {
    debugger;
    try{
        dispatch({
            type: INVENTORY_LIST_REQUEST
        })

        const {data} = await axios.get("http://localhost:4000/inventory")

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