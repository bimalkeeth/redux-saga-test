export const Types = {
  GET_USERS_REQUEST:'users/get_users_request',
  GET_USERS_SUCCESS :'users/get_users_success',
  CREATE_USER_REQUEST:'users/create_user_request'
};

export const getUserRequest =()=>({
   type:Types.GET_USERS_REQUEST
});

export const getUsersSuccess =({items})=>({
   type:Types.GET_USERS_SUCCESS,
   playload:{items}
});

export const createUserRequest=({firstName,lastName})=>({
    type:Types.CREATE_USER_REQUEST,
    playload:{
               firstName,
               lastName
             }
});
