import React from 'react';
import css from "./FormsControls.module.css";
import {Field} from "redux-form";

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={hasError ? css.error : ""}>
            <div>
                <textarea  {...input} {...props}/>
            </div>
            {hasError && meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    );
}

export const Input = ({input, meta : {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={hasError ? css.error : ""}>
            <div>
                <input  {...input} {...props}/>
            </div>
            {hasError && touched && error && <span>{error}</span>}
        </div>
    );
}

export const createField = ({validator, placeholder, component, name, props = {}, text = ""}) => (
    <div>
        <Field validate={validator} placeholder={placeholder}
               component={component} name={name}
               {...props}
        />{text}
    </div>
)



