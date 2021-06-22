import * as extra from "../actions"


const initialState = {
    count : 10,
    coca : 10,
}

export const  countReducer = (state = initialState,action)=>{
    console.log(action.type)
    switch (action.type){
        case extra.ADD :{
            return {...state , count :  state.count + action.payload}
        }
        case extra.BUY_COCA : {
            return {...state , coca : state.coca -1}
        }



        default: return state
    }
}