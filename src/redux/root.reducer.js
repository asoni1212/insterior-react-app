import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { userProfileModuleReducer } from "../modules/UserProfile/redux/reducers";

const RESET= 'RESET';

const combinedReducers = combineReducers({
    userProfileModuleReducer
})

export const rootReducer = function (state , action) {
    if (action.type === RESET) {
        state = undefined;
    }
    return combinedReducers(state, action);
}