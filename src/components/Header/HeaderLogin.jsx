import css from "./Header.module.css";
import React from "react";

export const HeaderLogin = (props) => {
    const {login, email} = props.props;
    return (
        <div className={css.headerLogin}>
            <div>{login}</div>
            <div>{email}</div>
        </div>
    )
};