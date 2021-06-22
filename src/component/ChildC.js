import React from 'react'
import { useSelector, useDispatch} from 'react-redux';
import * as actions from '../redux/actions/actions'




const ChildC = () => {

const state = useSelector(state => state.name)
const dispatch = useDispatch()

    return (
        <div>
            <h3>---------------</h3>

            <p>fullName: {state.fullName} </p>
            <button onClick={() => dispatch(actions.fullName())}>create</button>
            <br />
            <button onClick={() => dispatch(actions.clearName()) }>clear</button>
            
        </div>
    )
}

export default ChildC
