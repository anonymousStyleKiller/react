import React from 'react';
import css from "./FormsControls.module.css";

const  FormControl = () =>{

}



export const Textarea = ({input, meta, ...props}) => {
    const  hasError = meta.touched && meta.error;
    return (
        <div className={hasError ? css.error : ""}>
            <div>
                <textarea  {...input} {...props}/>
            </div>
            {hasError && meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    );
}


export const Input = ({input, meta, ...props}) => {
    const  hasError = meta.touched && meta.error;
    return (
        <div className={hasError ? css.error : ""}>
            <div>
                <input  {...input} {...props}/>
            </div>
            {hasError && meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    );
}