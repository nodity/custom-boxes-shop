import React from "react"

import { compose } from "redux"
import { connect } from 'react-redux'
import Footer from "./Footer"
import { addMail } from "./../../store/appReducer"

const FooterContainer = (props) => {

    return (
        <Footer addMail={props.addMail} mails={props.mails}/>
    )
}

let mapStateToProps = (state) => {
    return {
        mails: state.app.mails,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMail: (mail) => {
            dispatch(addMail(mail))
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
)(FooterContainer)