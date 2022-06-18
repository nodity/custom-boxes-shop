import React, { useEffect } from "react"
import './Login.css'
import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom';


const Login = (props) => {

    let navigate = useNavigate();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        if ((data.username == props.profile.username) && (data.password == props.profile.password)) {
            props.setAuth()
        }
    };

    useEffect( () => {
        if (props.isLogIn) {
            return navigate('/')
        }
    },[props.isLogIn]);

    

    return (
        <div className="container-fluid login-page">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h1>Log In</h1>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row login-form">
                        <div className="row">
                            <div className="col-sm">
                                <span>Username</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <input {...register('username', {required: true})} type="text" placeholder="username" />
                            </div>
                        </div>
                        <div className="row password-field">
                            <div className="col-sm">
                                <span>Password</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <input {...register('password', {required: true})} type="password" placeholder="password" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <input className="submit-button" type="submit" value='Login' />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login