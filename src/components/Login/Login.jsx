import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} placeholder={"Email"} component={Input} name={"email"} />
            </div>
            <div>
                <Field validate={[required]} placeholder={"Password"} component={Input} name={"password"}
                        type="password"
                />
            </div>
            <div>
                <Field validate={[required]} component={Input}  name={"checkbox"} type={"checkbox"}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxFrom = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }


    if(props.isAuth){
        return <Redirect to={"/profile"} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxFrom onSubmit={onSubmit}/>
        </div>
    )
}


const mapStateToProps= (state) => ({
        isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);