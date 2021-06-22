import React , {useEffect} from 'react';
import {fetchUser} from "../redux/actions/actions"

import { connect } from 'react-redux';

const UserContainer = ({userdata , fetchUser}) => {
	useEffect(()=>{
		fetchUser()
	
	},[])

	return userdata.loading ? (
				<p>loading...</p>
			): userdata.error ? (
				<p>{userdata.error}</p>

			):(
				<div>
					<h1>List is here!</h1>
				<div>{userdata && userdata.users && userdata.users.map(item=>
					<div>{item.name}</div>)}
					</div>
				</div>

			)

}


const mapStateToProps = state =>{
	return {
		userdata : state.users
	}
}
const mapDispatchToProps = dispatch =>{
	return {
		fetchUser :()=> dispatch(fetchUser())
	}
}
 
export default connect(mapStateToProps,mapDispatchToProps)(UserContainer);