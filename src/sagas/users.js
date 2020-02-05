import {takeEvery,takeLatest, call,fork,put} from "redux-saga/effects"
import * as actions from '../actions/users'
import * as api from '../api/users'
function* getUsers() {
    try
    {
     const result=yield call(api.getUsers);
     yield put(actions.getUsersSuccess({items:result.data.data}));

    }catch (e) {  }
}
function* watchGetUserRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST,getUsers);
}

function* createUser(action) {
   try{
      yield call(api.createUser,{firstName:action.playload.firstName,lastName:action.playload.lastName});
      yield call(getUsers)
   }catch (e) {  }
}

function* watchCreateUserRequest() {
 yield  takeLatest(actions.Types.CREATE_USER_REQUEST,createUser);
}

const userSagas=[
 fork(watchGetUserRequest),
 fork(watchCreateUserRequest)
];
export default userSagas;