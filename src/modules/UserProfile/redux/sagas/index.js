import { all } from "redux-saga/effects";
import userDataSagas from "./get_user_data.saga";

export default function* userProfileModuleSaga() {
    yield all([
        userDataSagas()
    ])
}