import axios from "axios"
import { BASE_URL } from "../constants/commonConstants"
import { ALL_SUPPLIERS_LIST_FAILURE, ALL_SUPPLIERS_LIST_REQUEST, ALL_SUPPLIERS_LIST_SUCCESS } from "../constants/supplierConstants"

export const getAllSuppliers = () => async (dispatch) => {
    try{
        dispatch({
            type: ALL_SUPPLIERS_LIST_REQUEST
        })

        const {data} = await axios.get(`${BASE_URL}/suppliers`);

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