import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import style from '../common/FormsControls/FormsControls.module.css'
import css from './Login.module.css'

const LoginForm = ({handleSubmit, error}) => {
    return (
        <div className={css.loginForm}>
            <div className={css.loginFormInner}>
                <form onSubmit={handleSubmit}>
                    <h1 className={css.titleForm}>Register </h1>
                    {createField([required], "Email", {Input}, "email")}
                    {createField([required], "Your Password", {Input},
                        "password", {type: "password"})}
                    {createField([], null, {Input},
                        "rememberMe", {type: "checkbox"}, "rememberMe")}
                    {error && <div className={style.loginError}>
                        {error}
                    </div>}

                    <div>
                        <button className={css.loginBtn}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const LoginReduxFrom = reduxForm({form: 'login'})(LoginForm)

const Login = ({login, isAuth}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
    }
    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <LoginReduxFrom onSubmit={onSubmit}/>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);