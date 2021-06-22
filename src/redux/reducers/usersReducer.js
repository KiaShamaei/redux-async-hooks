import * as extra from "../actions"
const initailState = {
	loading : false ,
	users : [],
	error : ""

}

export const usersReducer = (state = initailState , action )=>{
	switch(action.type){
		case extra.FETCH_USERS_REQUESET: return{
			...state , 
			loading : true, 

		}
		case extra.FETCH_USERS_SUCCESS : return {
			loading : false , 
			users : action.payload , 
			error : ""
		}
		case extra.FETCH_USERS_ERROR : return {
			loading : false ,
			users : [] ,
			error : action.payload
		}
		default : return state
	}
}