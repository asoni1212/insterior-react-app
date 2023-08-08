export const GET_USER_DATA_REQUEST ='GET_USER_DATA_REQUEST';
export const GET_USER_DATA_REQUEST_SUCCESS ='GET_USER_DATA_REQUEST_SUCCESS';
export const GET_USER_DATA_REQUEST_FAILURE ='GET_USER_DATA_REQUEST_FAILURE';

export const getUserDataRequest = () => ({
    type: GET_USER_DATA_REQUEST
}); 

export const getUserDataRequestSuccess = (payload) => ({
    type: GET_USER_DATA_REQUEST_SUCCESS, payload
}); 

export const getUserDataRequestFailure = (error) => ({
    type: GET_USER_DATA_REQUEST_FAILURE , error
}); 