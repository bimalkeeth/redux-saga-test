import {takeEvery,call,fork,put} from "redux-saga/effects"
import * as actions from '../actions/users'
import * as api from '../api/users'
function* getUser() {
    try
    {
     const result=yield call(api.getUsers);
     yield put(actions.getUsersSuccess({items:result.data.data}));

    }catch (e) {

    }
}
function* watchGetUserRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST,getUser);
}

const userSagas=[fork(watchGetUserRequest)];
export default userSagas;