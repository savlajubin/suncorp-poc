import { takeEvery, takeLatest } from "redux-saga";
import { call, put } from "redux-saga/effects";
import axios from "axios";
import _ from "lodash";

//worker saga
export function* getUserDataAsync() {
  try {
    // console.log("saga worker running");
    // const response = yield call(axios.get, "https://gorest.co.in/public-api/users?_format=json");
    const response = yield call(axios.get, "/userStub.json");
    console.log("response", response.data);
    yield put({ type: "GET_USER_DATA_ASYNC", val: response.data });
  } catch (e) {
    console.log("saga worker falied");
  }
}

export function* getUserDataByIdAsync(val) {
  try {
    console.log("saga worker running by id", val.id);
    // const response = yield call(axios.get, "https://gorest.co.in/public-api/users?_format=json");
    const response = yield call(axios.get, "/userStub.json");
    yield put({ type: "GET_USER_DATA_BY_ID_ASYNC", val: _.find(response.data, { id: val.id }) });
  } catch (e) {
    console.log("saga worker falied");
  }
}

export function* loginUserAsync(val) {
  try {
    // const response = yield call(axios.get, "https://gorest.co.in/public-api/users?_format=json");
    const response = yield call(axios.get, "/userStub.json");
    console.log("saga worker running by id", val, response, _);

    let foundUser = _.find(response.data, { username: val.formData.username, password: val.formData.password });
    if (foundUser) {
      yield put({ type: "LOGIN_USER_ASYNC", val: foundUser });
    } else {
      yield put({ type: "LOGIN_USER_FAILED_ASYNC", msg: "User Not Found" });
    }
  } catch (e) {
    console.log("saga worker falied");
  }
}

//watcher saga
export function* watchGetUserData() {
  // console.log("saga running");
  yield takeEvery("GET_USER_DATA", getUserDataAsync);
}

export function* watchGetUserDataById() {
  // console.log("saga called ib id", action);
  yield takeLatest("GET_USER_DATA_BY_ID", getUserDataByIdAsync);
}

export function* watchLogin() {
  // console.log("saga called ib id", action);
  yield takeLatest("LOGIN_USER", loginUserAsync);
}

//root saga
export default function* rootSaga() {
  yield [watchGetUserData(), watchGetUserDataById(), watchLogin()];
}