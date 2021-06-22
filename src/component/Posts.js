import React, { useEffect } from 'react'

import { useDispatch,useSelector } from 'react-redux'
import {fetchPost} from "../redux/actions/actions"

const Posts = () => {
     const dispatch = useDispatch( );
     const state = useSelector(state=>state.posts)
     useEffect(()=>{
         dispatch(fetchPost())

     },[])
     console.log(state)
    return (
        <div>
            <h2>this is post request </h2>
            {state.posts.length === 0 ? <p>page is loading</p>: 
            state.posts.map((item,index)=>{
                return <p key={index}>{item.title}</p>
            })
            }
            
        </div>
    )
}

export default Posts
