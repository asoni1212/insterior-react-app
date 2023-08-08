import {
    GET_USER_DATA_REQUEST,
    GET_USER_DATA_REQUEST_SUCCESS, GET_USER_DATA_REQUEST_FAILURE
} from "../actions/getUserData.action";


const initialState = {
    userData: [],
    isLoading: false
}

export const GetUserDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                userData: [],
            }
            break;
        case GET_USER_DATA_REQUEST_SUCCESS:
            
        console.log(action)
            return {
                ...state,
                isLoading: true,
                userData: action.payload.data
            }
            break;
        case GET_USER_DATA_REQUEST_FAILURE:
            return {
                ...state,
                isLoading: false,
                userData: []
            }
            break;

        default:
            return {
                ...state
            }
            break;
    }
}