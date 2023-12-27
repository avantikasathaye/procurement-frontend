import { ShowToasts } from "../components/statelessViews";
import axios from "axios";
import { BASE_URL } from "../constants/commonConstants";
import {removeLocalStorageItems} from './commonActions';
import { DEPARTMENT_REQUEST_FAILURE, DEPARTMENT_REQUEST_RECORDS_FAILURE, DEPARTMENT_REQUEST_RECORDS_REQUEST, 
            DEPARTMENT_REQUEST_RECORDS_SUCCESS, DEPARTMENT_REQUEST_REQUEST, DEPARTMENT_REQUEST_SUCCESS } 
            from "../constants/departmentRequestConstants";

export const getAllInternalDepartmentRequestRecords = () => async (dispatch) => {
    debugger;
    try{
        dispatch({
            type: DEPARTMENT_REQUEST_RECORDS_REQUEST
        })

        const {data} = await axios.get("http://localhost:4000/api/allInternalOrders")

        dispatch({
            type: DEPARTMENT_REQUEST_RECORDS_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: DEPARTMENT_REQUEST_RECORDS_FAILURE,
            payload: error.response && error.response.data.message 
                    ? error.response.data.message 
                    : error.message
        })
    }
}

export const addNewDepartmentRequest = (requestData) => async(dispatch) => {
    try{
        dispatch({
            type: DEPARTMENT_REQUEST_REQUEST
        })
        debugger;

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const {data} = await axios.post(`${BASE_URL}/api/add-internal-orders`, requestData, config)

        dispatch({
            type: DEPARTMENT_REQUEST_SUCCESS,
            payload: data
        })
        
        ShowToasts("Request Uploaded Successfully!")

        removeLocalStorageItems(requestData)
    }catch(error){
        dispatch({
            type: DEPARTMENT_REQUEST_FAILURE,
            payload: error.response && error.response.data.message 
                    ? error.response.data.message 
                    : error.message
        })
    }
}