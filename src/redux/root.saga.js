import { all } from "redux-saga/effects";
import userProfileModuleSaga from "../modules/UserProfile/redux/sagas";

export function* rootSaga() {
  yield all([
    userProfileModuleSaga()
  ]);
}