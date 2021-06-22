import * as extra from '../actions'

const initState = {
    fName: 'Asma',
    lName: 'Tanavar',
    fullName: '',
}


export const nameReducer = (state =initState, action) => {

switch (action.type) {
    case extra.FULLNAME: {
        return {
            ...state, fullName: state.fName + ' ' + state.lName
        }
    }
    case extra.CLEARNAME: {
        return {...state, fullName: ''}
    }

    default:
        return state;
}



}