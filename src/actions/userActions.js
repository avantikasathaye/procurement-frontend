import axios from "axios"
import { BASE_URL } from "../constants/commonConstants"
import { GET_OTP_FAILURE, GET_OTP_REQUEST, GET_OTP_SUCCESS, 
            USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constants/userConstants"

export const getOTP = (userEmail) => async(dispatch) => {
    try{
        dispatch({
            type: GET_OTP_REQUEST
        })
        debugger;
        const email = {"email": userEmail}
        const {data} = await axios.post(`${BASE_URL}/api/login`, email)

        dispatch({
            type: GET_OTP_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: GET_OTP_FAILURE,
            payload: error.response && error.response.data.message 
                    ? error.response.data.message 
                    : error.message
        })
    }
}

export const loginUser = (email, otp) => async (dispatch) => {
    try{
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        const { data } = await axios.post(`${BASE_URL}/api/verify-otp-login`, {email, otp}, config)

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
        debugger;
        console.log("USERINFO : DATA:" + data)
    }catch(error){
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message 
                    ? error.response.data.message 
                    : error.message
        })
    }
}