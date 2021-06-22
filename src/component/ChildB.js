import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../redux/actions/actions'
const ChildB = (props) => {
    return (
        <div>
            <h2>ChildB</h2>
            <p>coca pay : {props.numCoca} </p>
            <button onClick={props.buycoca}>buycoca</button>
        </div>
    )
}
const mapStateToProps = state =>{
    return {
        numCoca :  state.coca
    }
}
const mapDispatchToProps = dispatch =>{
    return {buycoca :  ()=>dispatch(actions.buyCoca())}
}

export default connect(mapStateToProps,mapDispatchToProps)(ChildB)
