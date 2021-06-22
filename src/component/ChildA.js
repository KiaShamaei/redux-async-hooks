import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import * as actions from "../redux/actions/actions"

const ChildA = () => {
    const state = useSelector(state=>state.count);
    const dispatch = useDispatch();
    // const obj = {type :"ADD"}
    return (
        <div>
            <h2>this is child page </h2>
            <p>this is state  :  {state.count}</p>
            <button onClick={()=>dispatch(actions.add(5))}>add</button>

        </div>
    )
}

export default ChildA
