import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} placeholder={"Login"} component={Input} name={"login"} />
            </div>
            <div>
                <Field validate={[required]} placeholder={"Password"} component={Input} name={"password"}/>
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
        console.log(formData);
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxFrom onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;