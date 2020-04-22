import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import style from '../common/FormsControls/FormsControls.module.css'
import css from './Login.module.css'

const LoginForm = (props) => {
    return (
        <div className={css.loginForm}>
            <div className={css.loginFormInner}>
                <form onSubmit={props.handleSubmit}>
                    <h1 className={css.titleForm}>Register </h1>
                    <div>
                        <Field validate={[required]}  placeholder={"Your Email"} component={Input}
                               name={"email"}/>
                    </div>
                    <div>
                        <Field validate={[required]}  placeholder={"Your Password"}
                               component={Input} name={"password"}
                               type="password"/>
                    </div>

                        <p className={css.loginCheckboxText}>  I accept the Terms and Conditions of the website</p>
                        <Field className={css.loginCheckbox} validate={[required]} component={Input} name={"checkbox"} type={"checkbox"}/>

                    {props.error && <div className={style.loginError}>
                        {props.error}
                    </div>}

                    <div>
                        <button className={css.loginBtn}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const LoginReduxFrom = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }


    if (props.isAuth) {
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