import * as actions from "./index"
import axios from 'axios';
export const add = (value) => {
    return {
        type: actions.ADD,
        payload: value
    }
}
export const buyCoca = () => {
    return {
        type: actions.BUY_COCA
    }
}
export const fetchPostRequest = () => { 
    return {
        type : actions.FETCH_POST_REQUEST,

    } 
}
export const fetchPostSuccess = (users)=>{
  return {
    type :actions.FETCH_POST_SUCCESS ,
    payload :  users
  }
}
export const fetchPostFaild = (err)=>{
    return {
        type : actions.FETCH_POST_FAILD,
        payload : err
    }
}

export const fetchPost = ()=>{
    return (dispatch)=>{
        dispatch(fetchPostRequest())
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            let posts = res.data
            dispatch(fetchPostSuccess(posts))
        })
        .catch(err=>dispatch(fetchPostFaild(err)))
    }

}


export const fullName = () => {
    return {
        type: actions.FULLNAME
    }
}

export const clearName = () => {
    return {
        type: actions.CLEARNAME
    }
}




export const fetchUserRequest = () => {
    return {
        type: actions.FETCH_USERS_REQUESET
    }
}
export const fetchUserSuccess = (users) => {
    return {
        type: actions.FETCH_USERS_SUCCESS,
        payload: users
    }
}
export const fetchUsersError = (err) => {
    return {
        type: actions.FETCH_USERS_ERROR,
        payload: err
    }
}

export const fetchUser = () => {
    return (dispatch) => {

        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const users = res.data;
                dispatch(fetchUserSuccess(users))
            })
            .catch(err => {
                dispatch(fetchUsersError(err.message))
            })
    }

}