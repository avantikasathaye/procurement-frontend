import { DEPARTMENT_REQUEST_FAILURE, DEPARTMENT_REQUEST_RECORDS_FAILURE, DEPARTMENT_REQUEST_RECORDS_REQUEST, DEPARTMENT_REQUEST_RECORDS_SUCCESS, 
    DEPARTMENT_REQUEST_REQUEST, DEPARTMENT_REQUEST_SUCCESS } from "../constants/departmentRequestConstants";

export const departmentRequestReducer = (state = {request: [], recordsList: [], loading: false}, action) => {
    switch(action.type){
        case DEPARTMENT_REQUEST_REQUEST:
            return{
                loading: true,
                request: []
            }
        case DEPARTMENT_REQUEST_SUCCESS:
            return{
                loading: false,
                request: action.payload
            }
        case DEPARTMENT_REQUEST_FAILURE: 
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const departmentRequestListReducer = (state = {recordsList: [], loading: false}, action) => {
    switch(action.type){
        case DEPARTMENT_REQUEST_RECORDS_REQUEST:
            return{
                loading: true
            }
        case DEPARTMENT_REQUEST_RECORDS_SUCCESS:
            return{
                loading: false,
                recordsList: action.payload
            }
        case DEPARTMENT_REQUEST_RECORDS_FAILURE:
            return{
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}