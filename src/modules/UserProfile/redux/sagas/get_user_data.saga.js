import { call, put, takeLatest } from "redux-saga/effects";
import { GET_USER_DATA_REQUEST, getUserDataRequestSuccess } from "../actions/getUserData.action";
import { fetchUserData } from "../../api/user.api";

export function* getUserDataRequestSaga() {
    try {
        const data  = yield call(fetchUserData)
        if (data) {
            yield put(getUserDataRequestSuccess(data));
        }
    } catch (error) {
        console.log
    }
}

export default function* userDataSagas() {
    yield takeLatest(GET_USER_DATA_REQUEST, getUserDataRequestSaga)
}