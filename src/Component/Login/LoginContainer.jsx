import { connect } from "react-redux"
import { compose } from "redux"
import Login from "./Login"
import setAuthThunk, { setLogin } from './../../store/profileReducer';

const LoginContainer = (props) => {
    return (
        <Login isLogIn={props.isLogIn} profile={props.profile} setAuth={props.setAuth}/>
    )
}

let mapStateToProps = (state) => {
    return {
        isLogIn: state.profile.isLogIn,
        profile: state.profile.profile
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setAuth: () => {
            dispatch(setLogin())
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(LoginContainer)