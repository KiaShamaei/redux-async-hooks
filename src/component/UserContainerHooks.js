import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../redux/actions/actions';


const UserContainerHooks = () => {
    const state = useSelector(state => state.users);
    const dispatch = useDispatch();
    useEffect(() => {

      dispatch(fetchUser())
    }, [])
    console.log(state)
    return (
        <div>
            <h1>this is hooks</h1>
            {state.loading ? <p>page is loading</p> :
                state.users.map((item, index) => {
                    return <p key={index}>{item.name}</p>
                })}

        </div>
    )
}

export default UserContainerHooks
