import { connect } from "react-redux"
import { compose } from "redux"
import Header from "./Header"
import React from "react"
import { setLogout } from "../../store/profileReducer"

const HeaderContainer = (props) => {

    return(
        <Header cartLen={props.cartLen} setLogout={props.setLogout} isLogIn={props.isLogIn} profile={props.profile}/>
    )
}

let mapStateToProps = (state) => {
    return {
        isLogIn: state.profile.isLogIn,
        profile: state.profile.profile,
        cartLen: state.profile.cartLen,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setLogout: () => {
            dispatch(setLogout())
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps)
)(HeaderContainer)