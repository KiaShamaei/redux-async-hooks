import * as extra from "../actions"

const initialState = {
    loading :  false,
    posts : [],
    error : ""
}

export const postReducer = (state= initialState, action)=>{
    switch (action.type){
        case extra.FETCH_POST_REQUEST : return{
            ...state , loading : true
        }
        case extra.FETCH_POST_SUCCESS : return{
            loading : false,
            posts : action.payload,
            err : ""
        }
        case extra.FETCH_POST_FAILD : return{
            loading : false , 
            posts : [],
            err: action.payload
        }
        default :  return  state
    }

}